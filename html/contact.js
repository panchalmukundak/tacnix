document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Capture form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send the email using EmailJS
        emailjs.send("tacnix", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email sent successfully!");
            contactForm.reset(); // Reset the form after successful submission
        }, function (error) {
            console.log("FAILED...", error);
            alert("Failed to send email. Please try again later.");
        });
    });
});
