import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import botPic from "@/assets/Robot-Icon_Carolina-Blues.jpg"

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <img src={botPic} alt="Chatbot" className="w-32 h-32 mx-auto mb-6 rounded-full shadow-md" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Chatbot</h1>
        <p className="text-gray-600 mb-6">Ask anything you want and get instant responses.</p>
        <p className="text-sm text-gray-500 mb-6">Start by logging in or registering.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <Button className="w-full sm:w-auto">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="outline" className="w-full sm:w-auto">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home