import mongoose from "mongoose";

const schemaUser = mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("User", schemaUser);

export default User;