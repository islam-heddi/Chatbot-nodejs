import {create} from "zustand"
import { persist } from "zustand/middleware";

interface IMessage {
  _id?: string,
  role: "User" | "System",
  content: string,
  chatId?: string,
  senderId?: string,
  createdAt?: string,
  updatedAt?: string
}

type ChatType = {
    chatId: string;
    chatName: string;
    messages: IMessage[];
    updateChatId: (id: string) => void
    updateChatName: (name: string) => void
    updateMessages: (messages: IMessage[]) => void
    addMessages: (message: IMessage) => void
    resetChat: () => void
}

export const useChat = create<ChatType>()(persist((set, get) => ({
    chatId: "",
    chatName: "",
    messages: [],
    updateChatId: (id: string) => set({chatId: id}),
    updateChatName: (name: string) => set({chatName: name}),
    updateMessages: (messages: IMessage[]) => set({messages}),
    addMessages: (message) => set({messages: [...get().messages, message]}),
    resetChat: () => set({
        chatId: "",
        chatName: "",
        messages: [],
    })
}), {
    name: "chat-store"
}))