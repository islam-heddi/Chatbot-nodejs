import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { api } from "@/utils/api"
import { SIGN_OUT_USER } from "@/utils/constants"
import { useNavigate } from "react-router-dom"

function UserMenu() {
  const navigate = useNavigate()
  const handleSignOut = async () => {
    api.delete(SIGN_OUT_USER)
    .then(() => navigate("/login"))
    .catch(err => console.log(err))
  }
  return (
    <div className="flex flex-row justify-between items-center gap-5 p-2.5 border-r-2">
      <div>User name</div>
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>User name</DropdownMenuLabel>
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