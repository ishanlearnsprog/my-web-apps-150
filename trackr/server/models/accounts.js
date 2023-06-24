import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    initialAmount: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
})

const Account = mongoose.model("Account", accountSchema);

export default Account;