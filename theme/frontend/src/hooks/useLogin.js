import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    const login = async (email, password) => {
        try {
            const res = await fetch(`https://xenonstack-q6kv.onrender.com/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password}) 
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("site-user", JSON.stringify(data))
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
            return false;
        } finally {
            setLoading(false);
            return true;
        }
    }

    return {loading, login};
}

export default useLogin
