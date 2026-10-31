
const API_URL = "http://localhost:3005/api";

// ELEMENTS

const userName = document.getElementById("user-name");
const userAvatar = document.getElementById("user-avatar");

const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profileRole = document.getElementById("profile-role");
const profileAvatar = document.getElementById("profile-avatar");

const logoutButton = document.getElementById("logout-button");

// GET USER PROFILE

async function loadUserProfile() {

    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "login.html";
        return;
    }

    try {

        const response = await fetch(`${API_URL}/profile`, {

            method: "GET",

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Profile error");
        }

        const user = data.user;

        // USER INFORMATION

        const fullName = user.name || "Usuario";

        const firstName = fullName.trim().split(/\s+/)[0];

        const email = user.email || "";

        const role = user.role || "user";

        // GET INITIALS

        const initials = fullName
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0))
            .slice(0, 2)
            .join("")
            .toUpperCase();

        // TOPBAR

        userName.textContent = firstName;

        userAvatar.textContent = initials;

        // PROFILE CARD

        profileName.textContent = fullName;

        profileEmail.textContent = email;

        profileRole.textContent = role.toUpperCase();

        profileAvatar.textContent = initials;

    } catch (error) {

        console.error("Profile error:", error);

        userName.textContent = "Error";
        profileName.textContent = "No se pudo cargar el perfil";
        profileEmail.textContent = "";
    }
}

// LOGOUT

function logout() {

    const confirmLogout = confirm(
        "¿Estás seguro de que quieres cerrar sesión?"
    );

    if (confirmLogout) {

        localStorage.removeItem("token");

        window.location.href = "login.html";
    }
}

// EVENTS

logoutButton.addEventListener("click", logout);

// START

loadUserProfile();
