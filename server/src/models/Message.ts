import { Schema, model } from "mongoose"
const message: Schema = new Schema({
    content: {
        type: String,
        required: true
    },
    chatId: {
        type: Schema.Types.ObjectId,
        ref: "Chat",
        required: true
    },
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    role: {
        type: String,
        required: true,
        enum: ["System", "User"]
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

export const Message = model("Message", message)