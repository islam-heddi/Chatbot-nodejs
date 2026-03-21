import { api } from '@/utils/api'
import { Button } from './ui/button'
import { CREATE_CHAT } from '@/utils/constants'
import { useUser } from '@/context/User'
import { useHistory } from '@/context/History'

function NewChat() {
    const userId = useUser(state => state.userId)
    const addChat = useHistory(state => state.addChat)
    const handleCreateChat = () => {
        api.post(CREATE_CHAT, {
            userId
        }).then((res) => {
            addChat({
                _id: res.data._id,
                name: res.data.name,
                createdAt: res.data.createdAt
            })
        })
        .catch(err => console.log(err))
    }
  return (
    <Button className="w-full" onClick={() => handleCreateChat()}>
      New Chat
    </Button>
  )
}

export default NewChat