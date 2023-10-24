function isValidEmail(email: string): boolean {
    // You can use a regular expression or a library like validator.js for more advanced email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

export { isValidEmail }
