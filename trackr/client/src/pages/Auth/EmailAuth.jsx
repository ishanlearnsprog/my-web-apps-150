import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserContext } from "../../contexts/UserContext.jsx";

import {
    signUpUser,
    signInUser,
} from "../../utils/api.jsx";

const EmailAuth = () => {
    const { user, userDispatch } = getUserContext();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (user) navigate("/wallet");
    }, [user])

    const switchMode = () => {
        setUserData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
        setIsSignUp(!isSignUp);
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(userData)
            let res;
            if (isSignUp) {
                res = await signUpUser(userData);
            } else {
                res = await signInUser(userData);
            }
            if (res.status === 200) {
                localStorage.setItem("user", JSON.stringify(res.data));
                delete res.data.token;
                userDispatch({ type: "LOGIN", payload: res.data });
            }
            setUserData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    {isSignUp &&
                        <input
                            type="text"
                            placeholder="First Name"
                            value={userData.firstName}
                            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
                    }
                </div>

                <div>
                    {isSignUp &&
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={userData.lastName}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                    }
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </div>

                <div>
                    <button type="submit">
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                </div>
            </form>
            <div>
                <button onClick={switchMode}>
                    {isSignUp ? "Sign In" : "Sign Up"}
                </button>
            </div>
        </div>
    )
}

export default EmailAuth;