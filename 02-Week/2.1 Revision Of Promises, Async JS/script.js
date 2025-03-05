const fetchUserBtn = document.getElementById("fetchUserBtn");
const userCard = document.getElementById("userCard");
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

// Function to fetch user data
const fetchUser = async () => {
    try {
        userCard.classList.add("hidden");
        fetchUserBtn.innerText = "Fetching...";

        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        userImage.src = user.picture.large;
        userName.innerText = `${user.name.first} ${user.name.last}`;
        userEmail.innerText = user.email;

        userCard.classList.remove("hidden");
        fetchUserBtn.innerText = "Fetch User";
    } catch (error) {
        console.error("Error fetching user:",  error);
        fetchUserBtn.innerText = "Try Again";
    }
};

fetchUserBtn.addEventListener("click", fetchUser);