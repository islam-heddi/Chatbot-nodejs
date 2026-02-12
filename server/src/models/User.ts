import { Schema, model } from "mongoose";
import { SaveOptions } from "mongoose";
import bcrypt from "bcrypt"

const user: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,
    },
})
user.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10)
})

user.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}
export const User = model("User", user)