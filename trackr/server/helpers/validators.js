export const checkEmail = (email) => {
    const validator = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return validator.test(email);
}