const form = {
    form: document.getElementById("form"),
    email: document.getElementById("email"),
    country: document.getElementById("country"),
    zipcode: document.getElementById("zipCode"),
    password: document.getElementById("password"),
    passwordConfirmation: document.getElementById("passwordConfirmation"),
}

function validateForm() {
    form.email.addEventListener("input", validateEmail)
    form.country.addEventListener("click", validateCountry)
    form.country.addEventListener("input", validateCountry)
    form.zipcode.addEventListener("input", validateZipCode)
    form.password.addEventListener("input", () => {
        return validatePassword(form.password.value)
    })
    form.passwordConfirmation.addEventListener("input", () => {
        return checkPasswordMatch(
            form.password.value,
            form.passwordConfirmation.value
        )
    })

    function validateEmail() {
        if (form.email.validity.typeMismatch) {
            form.email.setCustomValidity("Please enter a valid email address")
            form.email.reportValidity()
            return false
        } else {
            form.email.setCustomValidity("")
            form.email.reportValidity()
            return true
        }
    }

    function validateCountry() {
        if (form.country.value === "") {
            form.country.setCustomValidity("Please enter a country")
            form.country.reportValidity()
            return false
        } else {
            form.country.setCustomValidity("")
            form.country.reportValidity()
            return true
        }
    }

    function validateZipCode() {
        const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/
        if (isValidZip.test(form.zipcode.value) === false) {
            form.zipcode.setCustomValidity("Please enter a valid zip code")
            form.zipcode.reportValidity()
            return false
        } else {
            form.zipcode.setCustomValidity("")
            form.zipcode.reportValidity()
            return true
        }
    }

    function validatePassword(password) {
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasNumbers = /\d/.test(password)
        const hasNonalphas = /\W/.test(password)

        if (password.length < 8) {
            return (
                form.password.setCustomValidity("Too short"),
                form.password.reportValidity(),
                false
            )
        }
        if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 4) {
            return (
                form.password.setCustomValidity(
                    "Make sure to have a capital, lower case, number and special character"
                ),
                form.password.reportValidity(),
                false
            )
        }
        if (
            hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas === 4 &&
            password.length > 8
        ) {
            return (
                form.password.setCustomValidity(""),
                form.password.reportValidity(),
                true
            )
        }
    }

    function checkPasswordMatch(password, confirmedPassword) {
        if (password !== confirmedPassword) {
            return (
                form.passwordConfirmation.setCustomValidity(
                    "Passwords do not match"
                ),
                form.passwordConfirmation.reportValidity(),
                false
            )
        } else if (password === confirmedPassword) {
            return (
                form.passwordConfirmation.setCustomValidity(""),
                form.passwordConfirmation.reportValidity(),
                true
            )
        }
    }

    if (
        validateEmail() === true &&
        validateCountry() === true &&
        validateZipCode() === true &&
        validatePassword(form.password.value) === true &&
        checkPasswordMatch(
            form.password.value,
            form.passwordConfirmation.value
        ) === true
    ) {
        return true
    } else {
        return false
    }
}

form.form.addEventListener("submit", e => {
    switch (validateForm()) {
        case false:
            e.preventDefault()
            break
        case true:
            return
    }
})
