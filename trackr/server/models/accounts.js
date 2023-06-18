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
    amount: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    }
})

const Account = mongoose.model("Account", accountSchema);

export default Account;