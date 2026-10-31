
const editButton = document.getElementById("edit-button");

editButton.addEventListener("click", () => {

    const firstName = prompt("Enter your first name:");

    if (firstName === null || firstName.trim() === "") {
        return;
    }

    const lastName = prompt("Enter your last name:");

    if (lastName === null || lastName.trim() === "") {
        return;
    }

    const email = prompt("Enter your email:");

    if (email === null || email.trim() === "") {
        return;
    }

    document.getElementById("first-name").textContent = firstName;
    document.getElementById("last-name").textContent = lastName;
    document.getElementById("email").textContent = email;

    document.querySelector(".profile-details h2").textContent =
        `${firstName} ${lastName}`;

    document.querySelector(".profile-details p").textContent = email;

    const initials = (
        firstName.charAt(0) + lastName.charAt(0)
    ).toUpperCase();

    document.querySelector(".profile-avatar").textContent = initials;
    document.querySelector(".avatar").textContent = initials;

    document.querySelector(".user-info h3").textContent = firstName;

    alert("Profile updated successfully!");
});
