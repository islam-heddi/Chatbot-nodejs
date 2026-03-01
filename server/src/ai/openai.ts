import {OpenAI} from "openai"

const promptMessage = async (message: string) : Promise<string | undefined> => {
    if(!message) return "please send a message"
    try {
        const openai = new OpenAI({
            baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
            apiKey: process.env.GEMINI_API_KEY
        })
        const chatCompletion = await openai.chat.completions.create({
            model: "gemini-2.5-flash",
             messages: [{ content: message, role: 'user' }],
        })
        return chatCompletion.choices[0].message.content as string
    } catch (error) {
        return error as string
    }
}

export {promptMessage}