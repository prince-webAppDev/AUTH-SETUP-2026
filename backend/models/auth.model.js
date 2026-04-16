import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:[true, "This Name is already taken"]
    },
    email: {
        type: String,
        required: true,
        unique:[true, "This Email is already taken"]
    },
    password: {
        type: String,
        required: true
    }
});
const UserModel= mongoose.model("User", userSchema);

export default UserModel;
