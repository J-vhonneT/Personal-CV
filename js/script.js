console.log("js/script.js");

// Submit button
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
    }
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
const toggleIcon = document.getElementById("toggleIcon");
const toggleText = document.getElementById("toggleText");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleIcon.textContent = "🌙"; // moon
        toggleText.textContent = " Light Mode"; // click to go light
    } else {
        toggleIcon.textContent = "☀️"; // sun
        toggleText.textContent = " Dark Mode"; // click to go dark
    }
});


// Skills toggle
const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");
toggleSkills.addEventListener("click", function() {
    skillsSection.classList.toggle("hidden");
});
