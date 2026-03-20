import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useChat } from "@/context/Chat"
import { useHistory } from "@/context/History"
import { useUser } from "@/context/User"
import { api } from "@/utils/api"
import { SIGN_OUT_USER } from "@/utils/constants"
import { useNavigate } from "react-router-dom"
import { useShallow } from "zustand/react/shallow"

function UserMenu() {
  const {username, resetUser} = useUser(useShallow(state => ({
    username: state.username,
    resetUser: state.resetUser
  })))
  const resetChat = useChat(state => state.resetChat)
  const resetHistory = useHistory(state => state.resetChat)
  const navigate = useNavigate()
  const handleSignOut = async () => {
    api.delete(SIGN_OUT_USER)
    .then(() => {
      navigate("/login")
      resetUser()
      resetChat()
      resetHistory
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="flex flex-row justify-between items-center gap-5 p-2.5 border-r-2">
      <div className="flex flex-row gap-4 items-center">
        <div className="flex items-center justify-center h-7 w-7 bg-green-500 rounded-full text-white">
          <p className="text-xl">{username.charAt(0).toUpperCase()}</p>
        </div>
      <div>{username}</div>
      </div>
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{username}</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigate("/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/settings")}>
            Settings
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => handleSignOut()}>
            <span className="text-red-500">Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default UserMenu