import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/utils/api"
import { LOGIN } from "@/utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import type { AxiosError, AxiosResponse } from "axios"

function Login() {
  const [email,setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleLogin = () => {
    api.post(LOGIN, {
      email, password
    }).then((res: AxiosResponse) => console.log(res))
    .catch((err: AxiosError) => console.log(err))
  }
  return (
    <div className="grid place-items-center h-screen">
      <div className="rounded-2xl p-5 m-2 border flex flex-col gap-4">
        <h1>Login</h1>
        <p>fill the information below to proceed</p>
        <Label>Email</Label>
        <Input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Label>Password</Label>
        <Input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className="flex flex-row gap-2">
          <Button onClick={() => handleLogin()}>Login</Button>
          <Button onClick={() => {
            setEmail("")
            setPassword("")
          }}>Reset</Button>
        </div>
        <p>If you dont have an account, press <Link to="/register" className="text-blue-500">here</Link></p>
      </div>
    </div>
  )
}

export default Login