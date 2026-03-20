import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import botPic from "@/assets/Robot-Icon_Carolina-Blues.jpg"

function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="rounded-2xl p-5 m-2 border flex flex-col gap-4 items-center">
        <img src={botPic}  className="size-32"/>
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