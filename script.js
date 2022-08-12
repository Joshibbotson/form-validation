const form = {
    form: document.getElementById("form"),
    email: document.getElementById("email"),
    country: document.getElementById("country"),
    zipcode: document.getElementById("zipCode"),
    password: document.getElementById("password"),
    passwordConfirmation: document.getElementById("passwordConfirmation"),
}

validateForm()
function validateForm() {
    form.email.addEventListener("blur", validateEmail)

    function validateEmail() {
        console.log("blurred")
        if (form.email.validity.typeMismatch) {
            form.email.setCustomValidity("Please enter a valid email address")
            return form.email.reportValidity()
        } else {
            form.email.setCustomValidity("")
            return form.email.reportValidity()
        }
    }

    form.country.addEventListener("click", validateCountry)

    function validateCountry() {
        if (form.country.value === "") {
            form.country.setCustomValidity("Please enter a country")
            return form.country.reportValidity()
        } else {
            form.country.setCustomValidity("")
            return form.country.reportValidity()
        }
    }
}

form.form.addEventListener("submit", e => {
    const messages = []
    // put logic to push error messages into messages
    e.preventDefault()
})
