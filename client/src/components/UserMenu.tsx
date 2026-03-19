import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser } from "@/context/User"
import { api } from "@/utils/api"
import { SIGN_OUT_USER } from "@/utils/constants"
import { useNavigate } from "react-router-dom"
import { useShallow } from "zustand/react/shallow"

function UserMenu() {
  const {username} = useUser(useShallow(state => ({
    username: state.username
  })))
  const navigate = useNavigate()
  const handleSignOut = async () => {
    api.delete(SIGN_OUT_USER)
    .then(() => navigate("/login"))
    .catch(err => console.log(err))
  }
  return (
    <div className="flex flex-row justify-between items-center gap-5 p-2.5 border-r-2">
      <div>{username}</div>
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{username}</DropdownMenuLabel>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
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