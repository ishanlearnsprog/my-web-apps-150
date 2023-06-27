export const formatAmountIndia = (amount) => {
    if (!amount) return "0";
    amount = (+amount).toLocaleString("hi", {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    return amount;
}