const userList = document.getElementById("userList");
const fetchButton = document.getElementById("fetchUsers");
const filterButton = document.getElementById("filterUsers");

let usersData = [];

// 1. Fetch Users from API using Arrow Function
const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        usersData = data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            active: Math.random() > 0.5
        }));

        displayUsers(usersData);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};


// Display Users using map()
const displayUsers = (users) => {
    userList.innerHTML = "";
    users.map(user => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${user.name}</strong> (${user.email}) -
        <span style= "color:${user.active ? 'green' : 'red'}">
        ${user.active ? "Active" : "Inactive"}
        </span>`;
        userList.appendChild(li);
    });
};


// Filter Users using filter()
const filterUsers = () => {
    const activeUsers = usersData.filter(user => user.active);
    displayUsers(activeUsers);
};

// Event Listeners using Arrow Functions
fetchButton.addEventListener("click", fetchUsers);
filterButton.addEventListener("click", filterUsers);