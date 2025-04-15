import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true
    },
    mobile: {
        type: String,
        required: false,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: false,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    carts: Array 
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User
