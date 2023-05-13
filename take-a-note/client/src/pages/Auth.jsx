import { useContext, useState } from "react";

import { useUsersContext } from "../hooks/useUsersContext.jsx"
import { signInUser, signUpUser } from "../api.jsx";

const Auth = () => {
    const { dispatch } = useUsersContext();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res;
        if (isSignUp) {
            res = await signUpUser({ ...formData });
        } else {
            res = await signInUser({ ...formData });
        }
        if (res.status === 200) {
            localStorage.setItem("user", JSON.stringify(res.data));
            dispatch({ type: "LOGIN", payload: JSON.stringify(res.data) });
        }
    }

    return (
        <main>
            <section>
                <h1>Take-A-Note</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={(e) => (setFormData({ ...formData, email: e.target.value }))} />
                    </div>
                    <div >
                        <label htmlFor="paswword">Password</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={(e) => (setFormData({ ...formData, password: e.target.value }))} />
                    </div>
                    <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
                </form>
                <button onClick={() => { setIsSignUp(!isSignUp); setFormData({ email: "", password: "" }); }}>{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</button>
            </section>
        </main>
    )
}

export default Auth;