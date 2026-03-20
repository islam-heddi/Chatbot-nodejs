import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Auth from "./context/Auth"
import Profile from "./pages/Profile"
function App() {

  return (
    <BrowserRouter>
    <Auth>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </Auth>
    </BrowserRouter>
  )
}

export default App
