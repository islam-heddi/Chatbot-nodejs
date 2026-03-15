import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/utils/api"
import { REGISTER } from "@/utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"

function Register() {
  const [email, setEmail] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleRegister = async () => {
    api.post(REGISTER, {
      email,username,password
    }).then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="rounded-2xl p-5 m-2 border flex flex-col gap-4">
        <h1>Register</h1>
        <p>fill the information below to create a new account</p>
        <Label>Username</Label>
        <Input type="text" placeholder="enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Label>Email</Label>
        <Input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Label>Password</Label>
        <Input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className="flex flex-row gap-2">
          <Button onClick={() => handleRegister()}>Register</Button>
          <Button onClick={() => {
            setEmail("")
            setPassword("")
            setUsername("")
          }}>Reset</Button>
        </div>
        <p>If you have an account, press <Link to="/login" className="text-blue-500">here</Link></p>
      </div>
    </div>
  )
}

export default Register