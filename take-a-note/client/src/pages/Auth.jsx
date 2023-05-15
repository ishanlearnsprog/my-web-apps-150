import { useContext, useState } from "react";
import validator from "validator";

import { useUsersContext } from "../hooks/useUsersContext.jsx"
import { signInUser, signUpUser } from "../api.jsx";

const Auth = () => {
    const { dispatch } = useUsersContext();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const clear = () => {
        setFormData({ email: "", password: "" });
        setConfirmPassword("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.email === "" || formData.password === "") {
            setError("All fields must be filled");
            return
        }

        if (!validator.isEmail(formData.email)) {
            setError("Email not valid");
            return
        }

        let res;

        if (isSignUp) {

            if (formData.password !== confirmPassword) {
                setError("Passwords do not match");
                clear()
                return;
            }

            if (!validator.isStrongPassword(formData.password)) {
                setError("Password not strong enough");
                clear();
                return
            }

            res = await signUpUser({ ...formData })
                .catch((error) => {
                    setError(error?.response?.data?.error);
                    clear()
                });

        } else {

            res = await signInUser({ ...formData })
                .catch((error) => {
                    setError(error?.response?.data?.error);
                    clear()
                });

        }

        if (res?.status === 200) {
            localStorage.setItem("user", JSON.stringify(res.data));
            dispatch({ type: "LOGIN", payload: JSON.stringify(res.data) });
        }

    }

    return (
        <main>
            <section>
                <h1>Take-A-Note</h1>
                {error && (<p>{error}</p>)}
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={(e) => (setFormData({ ...formData, email: e.target.value }))} />
                    </div>
                    <div >
                        <label htmlFor="paswword">Password</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={(e) => (setFormData({ ...formData, password: e.target.value }))} />
                    </div>
                    {isSignUp && (<div>
                        <label htmlFor="confirmPaswword">Confirm Password</label>
                        <input type="text" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => (setConfirmPassword(e.target.value))} />
                    </div>)}
                    <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
                </form>
                <button onClick={() => { setIsSignUp(!isSignUp); setFormData({ email: "", password: "" }); }}>{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</button>
            </section>
        </main>
    )
}

export default Auth;