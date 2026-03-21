import botPic from "@/assets/Robot-Icon_Carolina-Blues.jpg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/utils/api"
import { LOGIN } from "@/utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import type { AxiosError, AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleLogin = () => {
    api.post(LOGIN, {
      email, password
    }).then((res: AxiosResponse) => {
      console.log(res)
      navigate("/chat")
    })
    .catch((err: AxiosError) => console.log(err))
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <img src={botPic} alt="Chatbot" className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md" />
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
          <p className="text-gray-600">Fill in your information to proceed</p>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={() => handleLogin()} className="flex-1">Login</Button>
            <Button
              variant="outline"
              onClick={() => {
                setEmail("")
                setPassword("")
              }}
              className="flex-1"
            >
              Reset
            </Button>
          </div>
        </div>
        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login