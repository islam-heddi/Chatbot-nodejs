import { PasswordConfirm } from "@/components/PasswordConfirm"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUser } from "@/context/User"
import { api } from "@/utils/api"
import {  UPDATE_PASSWORD } from "@/utils/constants"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useShallow } from "zustand/shallow"

function Settings() {
    const navigate = useNavigate()
    const {username, oldEmail} = useUser(useShallow(state => ({
        username: state.username,
        oldEmail: state.email
    })))
    const [name,setName] = useState<string>(username)
    const [email, setEmail] = useState<string>(oldEmail)

    const [currentPassword, setCurrentPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [confimPassword, setConfirmPassword] = useState<string>("")


    const handleUpdatePassword = () => {
        if(newPassword !== confimPassword) return toast.error("new password does not match the confirm password")
        else if(newPassword.length < 6) return toast.error("the password should be atleast 6 characters") 
        api.patch(UPDATE_PASSWORD, {
            oldPassword: currentPassword,
            newPassword
        })
        .then(() => toast.success("password changed successfully"))
        .catch(err => {
            console.log(err)
            toast.error("password have not changed")
        })

    }

    return (
    <div>
        <div className="inline-flex flex-col p-5">
        <h1 className="text-4xl">Settings</h1>
        <p className="inline p-4 cursor-pointer hover:text-gray-400" onClick={() => navigate(-1)}>&lt;- back</p>
        </div>
        <div className="flex flex-col gap-2.5 p-3.5 m-6">
            <h1 className="text-2xl">User Information</h1>
            <p>fill your user information</p>
            <Label>Username :</Label>
            <Input type="text" value={name} placeholder="enter your username" onChange={(e) => setName(e.target.value)}/>
            <Label>Email :</Label>
            <Input type="email" value={email} placeholder="enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <div className="flex flex-row gap-3">
            <PasswordConfirm name={name} email={email} />
            <Button variant={"outline"} onClick={() => {
                setName(username)
                setEmail(oldEmail)
            }}>Reset</Button>
            </div>
        </div>
        <div className="flex flex-col gap-2.5 p-3.5 m-6">
            <h1 className="text-2xl">Change Password</h1>
            <p>fill the information below to change your password</p>
            <Label>Current password</Label>
            <Input type="password" value={currentPassword} placeholder="enter your current password" onChange={(e) => setCurrentPassword(e.target.value)}/>

            <Label>New password</Label>
            <Input type="password" value={newPassword} placeholder="enter your new password" onChange={(e) => setNewPassword(e.target.value)}/>

            <Label>Confirm password</Label>
            <Input type="password" value={confimPassword} placeholder="enter your confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            <div className="flex flex-row gap-3">
            <Button onClick={() => handleUpdatePassword()} className="bg-red-400">Change</Button>
            <Button variant={"outline"} onClick={() => {
                setCurrentPassword("")
                setConfirmPassword("")
                setNewPassword("")
            }}>Reset</Button>

            </div>
        </div>
    </div>
  )
}

export default Settings