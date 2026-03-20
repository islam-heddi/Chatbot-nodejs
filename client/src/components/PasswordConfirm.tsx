import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUser } from "@/context/User"
import { api } from "@/utils/api"
import { UPDATE_USER } from "@/utils/constants"
import { useState } from "react"
import { toast } from "react-toastify"
import { useShallow } from "zustand/shallow"

export function PasswordConfirm({name, email}: {name: string, email: string}) {
  const [password, setPassword] = useState<string>("")
  const {updateUsername, updateEmail} = useUser(useShallow(state => ({
      updateUsername: state.updateUsername,
      updateEmail: state.updateEmail
  })))
  const handleUpdateInformation = () => {
      if(password.length < 3) return toast.error("the password is less than 4")
      if(name.length < 2) return toast.error("the name should be at least 4 characters")
      else if(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) return toast.error("the email should be valid")
      api.patch(UPDATE_USER, {
          email, username: name, password
      }).then(() => {
          toast.success("user updated")
          updateUsername(name)
          updateEmail(email)
      })
      .catch(err => {
          console.log(err)
          toast.error("cannot update please check the password or empty fields")
      })
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Change</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              to make changes to your profile. confirm your password.
            </DialogDescription>
          </DialogHeader>
          <Label htmlFor="password">password</Label>
          <Input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" onClick={() => handleUpdateInformation()}>Update</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
