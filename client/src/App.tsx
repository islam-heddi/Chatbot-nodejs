import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Auth from "./context/Auth"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import { ToastContainer } from "react-toastify"
function App() {

  return (
    <>
    <ToastContainer />
    <BrowserRouter>
    <Auth>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </Auth>
    </BrowserRouter>
    </>
  )
}

export default App
