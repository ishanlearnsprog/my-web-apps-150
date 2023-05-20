import { useContext, useState } from "react";
import validator from "validator";

import { useUsersContext } from "../hooks/useUsersContext.jsx"
import { signInUser, signUpUser } from "../api.jsx";

const Auth = () => {
    const { dispatchUser } = useUsersContext();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const clearSignUp = () => {
        setFormData({ email: "", password: "" });
        setConfirmPassword("");
    }

    const clearSignIn = () => {
        setFormData({ email: "", password: "" });
        setConfirmPassword("");
    }

    const switchMode = () => {
        if (isSignUp) {
            clearSignUp();
        } else {
            clearSignIn();
        }
        setError("");
        setIsSignUp(!isSignUp);
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
                clearSignUp();
                return;
            }

            if (!validator.isStrongPassword(formData.password)) {
                setError("Password not strong enough\nMinimum 8 charachters\n1 uppercase 1 lowercase\n1 number 1 symbol ");
                clearSignUp();
                return
            }

            setLoading(true);
            res = await signUpUser({ ...formData })
                .catch((error) => {
                    setError(error?.response?.data?.error);
                    clearSignUp();
                });
            setLoading(false);
        } else {

            setLoading(true);
            res = await signInUser({ ...formData })
                .catch((error) => {
                    setError(error?.response?.data?.error);
                    clearSignIn();
                });
            setLoading(false);
        }

        if (res?.status === 200) {
            localStorage.setItem("user", JSON.stringify(res.data));
            dispatchUser({ type: "LOGIN", payload: JSON.stringify(res.data) });
        }

    }

    return (
        <main className="layout-flex-auth">
            <section className="center">
                <h1 className="auth-heading">Take-A-Note</h1>
                {error && (<p className="error-alert">{error}</p>)}
                <form onSubmit={handleSubmit} noValidate className="auth-form">
                    <div className="form-div">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => (setFormData({ ...formData, email: e.target.value }))}
                        />
                    </div>
                    <div className="form-div">
                        <label className="form-label" htmlFor="paswword">Password</label>
                        <input className="form-input" type="password" name="password" id="password" value={formData.password} onChange={(e) => (setFormData({ ...formData, password: e.target.value }))} />
                    </div>
                    {isSignUp && (<div className="form-div">
                        <label className="form-label" htmlFor="confirmPaswword">Confirm Password</label>
                        <input className="form-input" type="text" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => (setConfirmPassword(e.target.value))} />
                    </div>)}
                    {loading ? <button className="button-form button-auth-margin disabled-button" type="submit" disabled>{isSignUp ? "Signing Up..." : "Signing In..."}</button>
                        : <button className="button-form button-auth-margin" type="submit" >{isSignUp ? "Sign Up" : "Sign In"}</button>}
                </form>
                <button className="button-action button-auth-center" onClick={() => switchMode()}>{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</button>
            </section>
        </main>
    )
}

export default Auth;