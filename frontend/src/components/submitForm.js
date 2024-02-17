function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform validation (you can add more complex validation here)

    // Create an object with the form data
    var formData = {
        name: name,
        email: email,
        message: message
    };

    // Assuming you want to log the form data to the console for now
    console.log(formData);

    // You can send the data to a server using AJAX or perform other actions as needed
    // For a simple example, we'll just alert a success message
    alert("Form submitted successfully!");
}
