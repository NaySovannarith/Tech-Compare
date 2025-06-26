// src/lib/data/custom-auth.ts
import { user } from './auth';

// LOGIN FUNCTION
export async function loginWithBackend(email: string, password: string) {
  // ✅ Step 1: Get CSRF cookie first (Sanctum requirement for session-based login)
  await fetch('http://localhost:8000/sanctum/csrf-cookie', {
    credentials: 'include'
  });

  // ✅ Step 2: Now send the login request
  const res = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include' // <- Required for Sanctum if using cookies
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Login failed');
  }

  const { user: userData, token } = await res.json();

  // Save token for Bearer-based use
  localStorage.setItem('authToken', token);

  // ✅ Fetch authenticated user using token
  const userRes = await fetch('http://localhost:8000/api/user', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  if (!userRes.ok) {
    throw new Error('Failed to fetch user after login');
  }

  const freshUser = await userRes.json();
  user.set(freshUser);
  return freshUser;
}


// LOGOUT FUNCTION
export async function logoutFromBackend() {
  const token = localStorage.getItem('authToken');
  if (!token) return;

  await fetch('http://localhost:8000/api/logout', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  localStorage.removeItem('authToken');
  user.set(null);
}

// REGISTER FUNCTION
export async function registerWithBackend(name: string, email: string, password: string) {
  const res = await fetch('http://localhost:8000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });

if (!res.ok) {
  const errorData = await res.json();

  console.error('[Register] Laravel error response:', errorData);

  let message = 'Registration failed';
  if (errorData.errors) {
    const firstKey = Object.keys(errorData.errors)[0];
    message = errorData.errors[firstKey][0] || message;
  } else if (errorData.message) {
    message = errorData.message;
  }

  throw new Error(message);
}


  return await res.json();
}

