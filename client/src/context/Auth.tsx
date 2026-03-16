import React, { useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { api } from '@/utils/api'
import { GET_AUTH_USER } from '@/utils/constants'

function Auth({children}: {children: React.ReactNode}) {
    const navigate = useNavigate()
    const location = useLocation()
    const unprotected: string[] = ["/login", "/register", "/"]
    useEffect(() => {
        console.log(location.pathname)
        api.get(GET_AUTH_USER)
        .then(() => {
            if(unprotected.find(a => a == location.pathname)?.length)
                navigate("/chat")
            }
        )
        .catch(() => {
            if(!unprotected.find(a => a == location.pathname)?.length)
                navigate("/login")
            }
        )
    },[location])

  return (
    children
  )
}

export default Auth