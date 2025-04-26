<script>
    const profiles = [
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        role: 'Admin',
        avatar: 'https://i.pravatar.cc/100?img=1'
      },
      {
        name: 'John Smith',
        email: 'john@example.com',
        role: 'Editor',
        avatar: 'https://i.pravatar.cc/100?img=2'
      },
      {
        name: 'Emily White',
        email: 'emily@example.com',
        role: 'Viewer',
        avatar: 'https://i.pravatar.cc/100?img=3'
      },
      {
        name: 'Michael Brown',
        email: 'michael@example.com',
        role: 'Contributor',
        avatar: 'https://i.pravatar.cc/100?img=4'
      }
    ];
  </script>
  
  <div class="px-8 py-10">
    <h1 class="text-3xl font-bold mb-6">User Profiles</h1>
  
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each profiles as profile}
        <div class="bg-white rounded-xl shadow-md p-5 flex items-center space-x-4">
          <img src={profile.avatar} alt="Avatar" class="w-16 h-16 rounded-full object-cover" />
          <div>
            <h2 class="text-lg font-semibold">{profile.name}</h2>
            <p class="text-sm text-gray-600">{profile.email}</p>
            <span class="inline-block mt-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              {profile.role}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
  