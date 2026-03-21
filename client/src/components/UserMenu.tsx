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
    <div className="p-4 border-t">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-8 w-8 bg-green-500 rounded-full text-white font-semibold">
            {username.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium">{username}</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              ⋮
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="end">
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
    </div>
  )
}

export default UserMenu