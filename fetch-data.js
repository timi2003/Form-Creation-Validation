document.addEventListener('DOMContentLoaded', () => {

    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            
            if (!response.ok) { // Check if response status is not OK
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const users = await response.json();

            // Clear the existing content of the container
            dataContainer.innerHTML = '';
            const userList = document.createElement('ul');
            
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList); // Append the list to the container

        } catch (error) {
            // Clear existing content and display error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    fetchUserData(); // Invoke the function on page load
});

