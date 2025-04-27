<script>
  import { Trash2, X, Camera, Check, X as XIcon } from 'lucide-svelte';
  
  // User information
  let userInfo = {
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    birthday: "01/15/1990",
    address: "123 Main Street, Anytown, USA",
    profilePicture: "/placeholder.svg?height=150&width=150"
  };
  
  // Wishlist items
  let wishlistItems = [
    { id: 1, name: "Wireless Headphones", price: 129.99, image: "/placeholder.svg" },
    { id: 2, name: "Smart Watch", price: 249.99, image: "/placeholder.svg" },
    { id: 3, name: "Laptop Backpack", price: 79.99, image: "/placeholder.svg" }
  ];
  
  // Recent searches
  let recentSearches = [
    { term: "wireless earbuds", date: "2023-11-10" },
    { term: "fitness tracker", date: "2023-11-08" },
    { term: "portable charger", date: "2023-11-05" },
    { term: "bluetooth speaker", date: "2023-11-01" }
  ];
  
  // Edit mode state
  let editMode = false;
  let editedUserInfo = { ...userInfo };
  
  // Function to toggle edit mode
  function toggleEditMode() {
    if (editMode) {
      // Cancel editing
      editMode = false;
      editedUserInfo = { ...userInfo };
    } else {
      // Start editing
      editMode = true;
      editedUserInfo = { ...userInfo };
    }
  }
  
  // Function to save changes
  function saveChanges() {
    userInfo = { ...editedUserInfo };
    editMode = false;
  }
  
  // Function to handle profile picture change
  function handleProfilePictureChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        editedUserInfo.profilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Function to remove item from wishlist
  function removeWishlistItem(id) {
    wishlistItems = wishlistItems.filter(item => item.id !== id);
  }
  
  // Function to remove search term
  function removeSearchTerm(term) {
    recentSearches = recentSearches.filter(search => search.term !== term);
  }
  
  // Function to clear all search terms
  function clearAllSearches() {
    recentSearches = [];
  }
</script>

<!-- Main container with extra padding to avoid navigation overlap -->
<div class="safe-area-container">
  <div class="profile-container">
    <header class="profile-header">
      <h1>My Profile</h1>
    </header>
    <div class="profile-content">
      <!-- User Information Section -->
      <section class="user-info-section">
        <div class="section-header">
          <h2>User Information</h2>
          {#if editMode}
            <div class="edit-actions">
              <button class="save-button" on:click={saveChanges}>
                <Check size={16} />
                Save
              </button>
              <button class="cancel-button" on:click={toggleEditMode}>
                <XIcon size={16} />
                Cancel
              </button>
            </div>
          {:else}
            <button class="edit-button" on:click={toggleEditMode}>
              Edit
            </button>
          {/if}
        </div>
        
        <!-- Profile Picture -->
        <div class="profile-picture-container">
          <div class="profile-picture">
            <img src={editMode ? editedUserInfo.profilePicture : userInfo.profilePicture} alt="P" />
            {#if editMode}
              <label class="change-picture" for="profile-picture-input">
                <Camera size={20} />
                <span>Change</span>x
                <input 
                  type="file" 
                  id="profile-picture-input" 
                  accept="image/*" 
                  on:change={handleProfilePictureChange} 
                  hidden
                />
              </label>
            {/if}
          </div>
        </div>
        
        <div class="info-grid">
          <div class="info-group">
            <label for="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              bind:value={editedUserInfo.fullName} 
              readonly={!editMode} 
              class:editable={editMode}
            />
          </div>
          
          <div class="info-group">
            <label for="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              bind:value={editedUserInfo.email} 
              readonly={!editMode}
              class:editable={editMode}
            />
          </div>
          
          <div class="info-group">
            <label for="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              bind:value={editedUserInfo.phone} 
              readonly={!editMode}
              class:editable={editMode}
            />
          </div>
          
          <div class="info-group">
            <label for="birthday">Birthday</label>
            <input 
              type="text" 
              id="birthday" 
              bind:value={editedUserInfo.birthday} 
              readonly={!editMode}
              class:editable={editMode}
            />
          </div>
          
          <div class="info-group full-width">
            <label for="address">Address</label>
            <textarea 
              id="address" 
              bind:value={editedUserInfo.address} 
              readonly={!editMode}
              class:editable={editMode}
            ></textarea>
          </div>
        </div>
      </section>
      
      <!-- User Activity Section -->
      <section class="user-activity-section">
        <h2>User Activity</h2>
        
        <!-- Saved Wishlist -->
        <div class="activity-group">
          <h3>Saved Wishlist</h3>
          
          <ul class="wishlist">
            {#each wishlistItems as item (item.id)}
              <li class="wishlist-item">
                <div class="item-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} />
                </div>
                <div class="item-details">
                  <span class="item-name">{item.name}</span>
                  <span class="item-price">${item.price.toFixed(2)}</span>
                </div>
                <button class="remove-button" on:click={() => removeWishlistItem(item.id)}>
                  <Trash2 size={18} />
                </button>
              </li>
            {/each}
          </ul>
        </div>
        
        <!-- Recent Searches -->
        <div class="activity-group">
          <div class="section-header">
            <h3>Recent Searches</h3>
            <button class="clear-button" on:click={clearAllSearches}>Clear All</button>
          </div>
          
          <ul class="searches">
            {#each recentSearches as search (search.term)}
              <li class="search-item">
                <div class="search-details">
                  <span class="search-term">"{search.term}"</span>
                  <span class="search-date">{search.date}</span>
                </div>
                <button class="remove-search" on:click={() => removeSearchTerm(search.term)}>
                  <X size={16} />
                </button>
              </li>
            {/each}
          </ul>
        </div>
      </section>
    </div>
  </div>
</div>

<style>
  /* Global styles */
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
  }
  
  /* Safe area container to prevent navigation overlap */
  .safe-area-container {
    /* Add padding to account for fixed navigation */
    padding-top: 60px; /* Adjust this value based on your navigation height */
    min-height: 100vh;
    width: 100%;
  }
  
  /* Container */
  .profile-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Header */
  .profile-header {
    padding: 2rem 0;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 0.2rem;
  }
  
  h1 {
    color: #21a880;
    margin: 1;
    font-size: 2rem;
  }
  
  /* Profile content */
  .profile-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 3rem; /* Add padding at the bottom for better spacing */
  }
  
  @media (min-width: 768px) {
    .profile-content {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  /* Section styling */
  section {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    height: fit-content; /* Prevent sections from stretching */
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  h2 {
    color: #6b21a8;
    margin: 0;
    font-size: 1.5rem;
  }
  
  h3 {
    color: #333;
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
  
  /* Profile Picture */
  .profile-picture-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .profile-picture {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .profile-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .change-picture {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .change-picture:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* User info section */
  .info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  @media (min-width: 640px) {
    .info-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .info-group {
    display: flex;
    flex-direction: column;
  }
  
  .full-width {
    grid-column: 1 / -1;
  }
  
  label {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  input, textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #f9f9f9;
  }
  
  .editable {
    background-color: white;
    border-color: #21a880;
  }
  
  textarea {
    resize: vertical;
    min-height: 80px;
  }
  
  /* Buttons */
  .edit-button, .save-button, .cancel-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .edit-button {
    background-color: #21a880;
    color: white;
  }
  
  .edit-button:hover {
    background-color: #581c87;
  }
  
  .edit-actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .save-button {
    background-color: #16a34a;
    color: white;
  }
  
  .save-button:hover {
    background-color: #15803d;
  }
  
  .cancel-button {
    background-color: #ef4444;
    color: white;
  }
  
  .cancel-button:hover {
    background-color: #dc2626;
  }
  
  .clear-button {
    background: none;
    border: none;
    color: #6b21a8;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0;
  }
  
  .clear-button:hover {
    text-decoration: underline;
  }
  
  /* Wishlist */
  .wishlist {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .wishlist-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #eaeaea;
  }
  
  .wishlist-item:last-child {
    border-bottom: none;
  }
  
  .item-image {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
  
  .item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .item-details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .item-name {
    font-weight: 600;
  }
  
  .item-price {
    color: #666;
  }
  
  .remove-button {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  /* Recent searches */
  .searches {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .search-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eaeaea;
  }
  
  .search-item:last-child {
    border-bottom: none;
  }
  
  .search-details {
    display: flex;
    flex-direction: column;
  }
  
  .search-term {
    font-weight: 500;
  }
  
  .search-date {
    font-size: 0.8rem;
    color: #666;
  }
  
  .remove-search {
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .activity-group {
    margin-bottom: 2rem;
  }
  
  .activity-group:last-child {
    margin-bottom: 0;
  }
  
  /* Ensure content is visible on mobile devices */
  @media (max-width: 640px) {
    .safe-area-container {
      padding-top: 70px; /* Slightly more padding on mobile */
    }
    
    .profile-header {
      margin-bottom: 1rem;
    }
    
    section {
      padding: 1rem;
    }
  }
</style>