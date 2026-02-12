import { Schema, model } from "mongoose";

const chat: Schema = new Schema({
    name: {
        type: String,
        required: true,
        default: "New Chat"
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export const Chat = model("Chat", chat)