function resetForm() {
    document.getElementById("surveyForm").reset();
}

document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Email validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        swal("Error", "Please enter a valid email address.", "error");
        return;
    }

    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        swal("Error", "Please fill in all fields.", "error");
        return;
    }

    var selectedGender = gender.value;
    
    var confirmationMessage = "Submitted Information:\n\n" +
                             "First Name: " + firstName + "\n" +
                             "Last Name: " + lastName + "\n" +
                             "Date of Birth: " + dob + "\n" +
                             "Country: " + country + "\n" +
                             "Gender: " + selectedGender + "\n" +
                             "Profession: " + profession + "\n" +
                             "Email: " + email + "\n" +
                             "Mobile Number: " + mobile;

    swal("Success!", confirmationMessage, "success")
        .then((value) => {
            resetForm();
        });
});
