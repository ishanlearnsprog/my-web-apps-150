export const formatAmountIndia = (amount) => {
    if (!amount) return "0";
    return (+amount).toLocaleString("hi");
}