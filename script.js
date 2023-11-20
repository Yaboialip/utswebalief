
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var firstNameInput = document.getElementById('firstName');
    var lastNameInput = document.getElementById('lastName');

    form.addEventListener('submit', function (event) {
        if (!isValidName(firstNameInput.value) || !isValidName(lastNameInput.value)) {
            alert('First name and last name should contain only alphabetical characters.');
            event.preventDefault(); 
        }
    });
    function isValidName(name) {
        var regex = /^[A-Za-z]+$/;
        return regex.test(name);
    }
});


// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Attach the scrollToSection function to the click event of the reserve button
    var reserveButton = document.querySelector('.reserve-button');
    if (reserveButton) {
        reserveButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            scrollToSection('contact-section');
        });
    }

    // Attach the scrollToSection function to the click event of the logs button
    var logsButton = document.querySelector('.logs-button');
    if (logsButton) {
        logsButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            scrollToSection('contact-section');
        });
    }

    // Attach the scrollToContact function to the click event of the contact button
    var contactButton = document.querySelector('.contact-button a');
    if (contactButton) {
        contactButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            scrollToSection('contact-section');
        });
    }
});
