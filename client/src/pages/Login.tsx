import { Button } from "@/components/ui/button"

function Login() {
  return (
    <div>
      <div className="p-5 m-2 grid place-items-center h-screen border-2">
        <h1>Login</h1>
        <input type="text" placeholder="enter your email"/>
        <Button>Click me</Button>
      </div>
    </div>
  )
}

export default Login