import {create} from "zustand"
import { persist } from "zustand/middleware"

interface IChat {
    _id: string,
    name: string,
    createdAt?: string,
    updatedAt?: string
}

type HistoryType = {
    chats: IChat[]
    updateChats: (chats: IChat[]) => void
    addChat: (chat: IChat) => void
    resetChat: () => void
}

export const useHistory = create<HistoryType>()(persist((set, get) => ({
    chats: [],
    updateChats: (chats: IChat[]) => set({chats}),
    addChat: (chat: IChat) => set({chats: [...get().chats, chat]}),
    resetChat: () => set({
        chats: []
    })
}), {
    name: "history-store"
}))