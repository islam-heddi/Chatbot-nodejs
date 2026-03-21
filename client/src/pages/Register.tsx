import botPic from "@/assets/Robot-Icon_Carolina-Blues.jpg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/utils/api"
import { REGISTER } from "@/utils/constants"
import type { AxiosResponse } from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleRegister = async () => {
    api.post(REGISTER, {
      email,username,password
    }).then((res: AxiosResponse) => {
      console.log(res)
      navigate("/chat")
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <img src={botPic} alt="Chatbot" className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md" />
          <h1 className="text-2xl font-bold text-gray-800">Register</h1>
          <p className="text-gray-600">Fill in your information to create a new account</p>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
            <Button onClick={() => handleRegister()} className="flex-1">Register</Button>
            <Button
              variant="outline"
              onClick={() => {
                setEmail("")
                setPassword("")
                setUsername("")
              }}
              className="flex-1"
            >
              Reset
            </Button>
          </div>
        </div>
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register