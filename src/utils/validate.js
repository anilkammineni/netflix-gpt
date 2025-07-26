export const checkValidData = (userName, email, password) => {

    const isValidUserName = /^[A-Z][a-zA-Z'’-]*(?: [A-Z][a-zA-Z'’-]*)*$/.test(userName);

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/.test(password);

    if (!isValidUserName) return "Invalid Name"
    if (!isEmailValid) return "Invalid Email"
    if (!isPasswordValid) return "Invalid Password"

    return null;
}