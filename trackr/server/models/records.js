import mongoose from "mongoose";

const recordSchema = mongoose.Schema({
    paymentType: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    recievingAccount: {
        type: mongoose.Types.ObjectId,
        ref: "Account",
    },
    account: {
        type: mongoose.Types.ObjectId,
        ref: "Account",
    },
    userId: {
        type: String,
        requires: true,
    }
}, { timestamps: true });

const Record = mongoose.model("Record", recordSchema);

export default Record;