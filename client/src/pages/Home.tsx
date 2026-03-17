import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="rounded-2xl p-5 m-2 border flex flex-col gap-4">
        <p>Welcome to the chatbot, ask what you want</p>
        <p>start by</p>
        <div className="flex flex-row flex-wrap gap-4">
        <Link to={"/login"}><Button>Login</Button></Link>
        <Link to={"/register"}><Button>Register</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home