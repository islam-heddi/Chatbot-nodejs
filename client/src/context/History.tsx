import {create} from "zustand"

interface IChat {
    chatId: string,
    chatName: string,
    createdAt?: string,
    updatedAt?: string
}

type HistoryType = {
    chats: IChat[]
    updateChats: (chats: IChat[]) => void
    addChat: (chat: IChat) => void
    resetChat: () => void
}

export const useHistory = create<HistoryType>()((set, get) => ({
    chats: [],
    updateChats: (chats: IChat[]) => set({chats}),
    addChat: (chat: IChat) => set({chats: [...get().chats, chat]}),
    resetChat: () => set({
        chats: []
    })
}))