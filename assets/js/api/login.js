import { baseurl, pythonURI, fetchOptions } from './config.js';

console.log("login.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("Base URL:", baseurl); // Debugging line
    getCredentials(baseurl) // Call the function to get credentials
        .then(data => {
            console.log("Credentials data:", data); // Debugging line
            const loginArea = document.getElementById('loginArea');
            if (data) { // Update the login area based on the data
                // User is authenticated, replace "Login" with User's name
                loginArea.innerHTML = `
                    <div class="dropdown">
                        <button class="dropbtn">${data.name}</button>
                        <div class="dropdown-content">
                            <a href="${baseurl}/logout">Logout</a>
                            <a href="${baseurl}/profile">Profile</a>
                            <a href="${baseurl}/analytics">Analytics</a>
                            <a href="${baseurl}/gamify">Gamify</a>
                            <a href="${baseurl}/toolkit-login">Toolkit</a>
                        </div>
                    </div>
                `;
            } else {
                // User is not authenticated, then "Login" link is shown
                loginArea.innerHTML = `<a href="${baseurl}/login">Login</a>`;
            }
        })
        .catch(err => {
            console.error("Error fetching credentials: ", err);
        });
});

async function getCredentials() {
    const response = await fetch("http://localhost:8087/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "user", password: "pass" }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch credentials");
    }

    return response.json();
}
