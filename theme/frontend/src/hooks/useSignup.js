import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext.js';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ email, username, password, confirmPassword }) => {
        const success = handleInputErrors({ email, username, password, confirmPassword })
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("https://xenonstack-q6kv.onrender.com/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, username, password, confirmPassword }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("site-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
            return false;
        } finally {
            setLoading(false);
            return true;
        }
    };

    return { loading, signup };
};

export default useSignup

function handleInputErrors({ email, username, password, confirmPassword }) {
    if (!email || !username || !password || !confirmPassword ) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 8) {
        toast.error("Password must be at least 8 characters");
        return false;
    }

    return true;
}