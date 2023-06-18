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
        type: String,
        required: true,
    },
    user: {
        type: String,
        requires: true,
    }
})

const Record = mongoose.model("Record", recordSchema);

export default Record;