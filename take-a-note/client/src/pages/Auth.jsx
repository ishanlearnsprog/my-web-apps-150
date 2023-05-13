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
        <main className="bg-indigo-950 text-neutral-50 font-mono h-screen flex justify-center items-center">
            <section className="py-5 px-10 border border-indigo-900">
                <h1 className="m-2.5 text-3xl text-center">Take-A-Note</h1>
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label htmlFor="email" className="">Email</label>
                        <input className="my-2 p-2 w-full block bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="email" name="email" id="email" value={formData.email} onChange={(e) => (setFormData({ ...formData, email: e.target.value }))} />
                    </div>
                    <div className="my-5">
                        <label htmlFor="paswword">Password</label>
                        <input className="my-2 p-2 w-full block bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="password" name="password" id="password" value={formData.password} onChange={(e) => (setFormData({ ...formData, password: e.target.value }))} />
                    </div>
                    <button className="my-5 p-2 w-full bg-indigo-900 hover:bg-indigo-800 text-center focus:outline-none" type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
                </form>
                <button className="m-2.5 hover:underline" onClick={() => { setIsSignUp(!isSignUp); setFormData({ email: "", password: "" }); }}>{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</button>
            </section>
        </main>
    )
}

export default Auth;