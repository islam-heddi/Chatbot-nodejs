import {create} from "zustand"
import { persist } from "zustand/middleware";

interface IMessage {
  id: string,
  role: "User" | "System",
  message: string
}

type ChatType = {
    chatId: string;
    chatName: string;
    messages: IMessage[];
    updateChatId: (id: string) => void
    updateChatName: (name: string) => void
    updateMessages: (messages: IMessage[]) => void
    addMessages: (message: IMessage) => void
}

export const useChat = create<ChatType>()(persist((set, get) => ({
    chatId: "",
    chatName: "",
    messages: [],
    updateChatId: (id: string) => set({chatId: id}),
    updateChatName: (name: string) => set({chatName: name}),
    updateMessages: (messages: IMessage[]) => set({messages}),
    addMessages: (message) => set({messages: [...get().messages, message]})  
}), {
    name: "chat-store"
}))