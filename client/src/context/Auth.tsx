import  { useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { api } from '@/utils/api'
import { GET_AUTH_USER } from '@/utils/constants'
import { useUser } from './User'
import * as React from 'react';
import { toast } from 'react-toastify'

function Auth({children}: {children: React.ReactNode}) {
const [_loading, startTransition] = React.useTransition()
const updateUserId = useUser(state => state.updateUserId);
const updateEmail = useUser(state => state.updateEmail);
const updateUsername = useUser(state => state.updateUsername);
    const navigate = useNavigate()
    const location = useLocation()
    const unprotected: string[] = ["/login", "/register", "/"]
    useEffect(() => {
        startTransition(async () => {
            try {
                const res = await api.get(GET_AUTH_USER);
                const isUnprotected = unprotected.includes(location.pathname);

                updateUsername(res.data.username);
                updateUserId(res.data._id);
                updateEmail(res.data.email);

                if (isUnprotected) {
                    navigate("/chat");
                }
            } catch (error) {
                const isUnprotected = unprotected.includes(location.pathname);

                if (!isUnprotected) {
                    navigate("/login");
                    toast.error("Please login to access this page");
                }
            }
        })
}, [location.pathname, updateUsername, updateUserId, updateEmail, navigate]);

  return (
    children
  )
}

export default Auth

