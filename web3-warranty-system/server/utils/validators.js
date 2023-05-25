export const validateAddress = (address) => {
    const re = /^0x[a-fA-F0-9]{40}$/;
    return re.test(address);
}

export const validateRole = (role) => {
    if (role === "seller" || role === "buyer") {
        return true;
    } else {
        return false;
    }
}