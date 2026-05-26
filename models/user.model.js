import mongoose from "mongoose";

const userSchema = new mongoose.userSchema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 3,
        maxlength: 50,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,

    },
    password: {
        type: string,
        required: [true, 'Password is required'],   
        minlength: 6,
    },
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;


