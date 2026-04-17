import UserModel from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";


export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if(!name || !email || !password){
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const userAlreadyExist = await UserModel.findOne({ $or: [{name}, {email}]} );
        if(userAlreadyExist){
            return res.status(400).json({ success: false, message: "User already exist" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await UserModel.create({ name, email, password: hashedPassword });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(201).json({ success: true, message: "User registered successfully", user});
        
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};



export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if(!email || !password){
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const user = await UserModel.findOne({ email });
        if(!user){
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({ success: true, message: "User logged in successfully", user});
        
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ success: true, message: "User logged out successfully"});
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id);
        res.status(200).json({ success: true, user});
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};