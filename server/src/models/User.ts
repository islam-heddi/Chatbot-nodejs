import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt"

interface IUser extends Document {
    password: string;
    isModified(path?: string): boolean;
    comparePassword(password: string): Promise<boolean>;
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
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
        minlength: 3,
        maxlength: 100,
    },
})
userSchema.pre("save", async function (this: IUser, next) {
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}
export const User = model<IUser>("User", userSchema)