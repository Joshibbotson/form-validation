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
    form.email.addEventListener("input", validateEmail)
    form.country.addEventListener("click", validateCountry)
    form.country.addEventListener("input", validateCountry)
    form.zipcode.addEventListener("input", validateZipCode)
    form.password.addEventListener("input", () => {
        return validatePassword(form.password.value)
    })

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

    function validateCountry() {
        if (form.country.value === "") {
            form.country.setCustomValidity("Please enter a country")
            return form.country.reportValidity()
        } else {
            form.country.setCustomValidity("")
            return form.country.reportValidity()
        }
    }

    function validateZipCode() {
        const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/
        if (isValidZip.test(form.zipcode.value) === false) {
            form.zipcode.setCustomValidity("Please enter a valid zip code")
            return form.zipcode.reportValidity()
        } else {
            form.zipcode.setCustomValidity("")
            return form.zipcode.reportValidity()
        }
    }

    function validatePassword(password) {
        if (password.length < 8) {
            form.password.setCustomValidity("Too short")
            return form.password.reportValidity()
        }
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasNumbers = /\d/.test(password)
        const hasNonalphas = /\W/.test(password)
        if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 4) {
            form.password.setCustomValidity(
                "Make sure to have a capital, lower case, number and special character"
            )
            return form.password.reportValidity()
        } else {
            form.password.setCustomValidity("")
            return form.password.reportValidity()
        }
    }

    if (
        validateEmail() === true &&
        validateCountry() === true &&
        validateZipCode() === true
    ) {
        return true
    } else {
        return false
    }
}

form.form.addEventListener("submit", e => {
    const messages = []
    // put logic to push error messages into messages

    switch (validateForm()) {
        case false:
            console.log("hi")

            e.preventDefault()
            break
        case true:
            console.log("bye")

            return
    }
})
