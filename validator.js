// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var country = document.contactForm.country.value;
    var password = document.contactForm.password.value;
    var comfirmpass = document.contactForm.confirmpass.value;

    // Defining error variables with a default value
    var nameErr = emailErr = countryErr = passwordErr = confirmpassErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }


    // Validate country
    if (country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    // password
    let passwordpattern = /^[a-z 0-9]{8,18}$/gi

    if (password == '' || password == null) {
        printError('passwordErr', "password can't be Blank ")
    } else if (passwordpattern.test(password) === true) {
        printError('passwordErr', passwordErr)
    }
    else {
        passwordErr = 'Please Enter Correct Format'
        printError('passwordErr', passwordErr)
    }

    // confirm Password 

    if (confirmpass == '' || confirmpass == null) {
        printError('confirmpassErr', "confirm password can't be Blank ")
    } else if( password ==comfirmpass){
        printError('Password is similar with confirm password')
        confirmpassErr = false;
    }else{(password !=comfirmpass)
        printError('Please enter same password in both')
        confirmpassErr = false;
    }


    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || countryErr || emailErr || passwordErr || confirmpassErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Magic Type: " + country + "\n" +
            "password" + password + "\n" +
            "confirm password " + comfirmpass + "\n" +
            // Display input data in a dialog box before submitting the form
            alert(dataPreview);
        
            return true
    }
    return false
};