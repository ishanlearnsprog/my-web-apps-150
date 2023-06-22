import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;