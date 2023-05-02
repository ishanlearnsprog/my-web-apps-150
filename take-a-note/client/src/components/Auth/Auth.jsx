import { useEffect, useState } from "react";

const Auth = () => {

    const [formData, setFormData] = useState({ "email": "", "password": "" });
    const [confirm, setConfirm] = useState("");
    const [isSignUp, setIsSignUp] = useState(0);

    const clear = () => {
        setFormData({ "email": "", "password": "" });
        setConfirm("");
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(confirm);
    }

    const toggleMode = (e) => {
        setIsSignUp(!isSignUp);
        clear()
    }

    const confirmPassword = (
        <>
            <label htmlFor="confirm">Confirm Password</label>
            <input placeholder="Repeat Password" className="bg-indigo-950 my-2.5" type="text" name="confirm" id="confirm" onChange={(e) => setConfirm(e.target.value)} value={confirm} />
        </>
    )

    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <h1 className="my-5 text-3xl font-semibold text-center">Take-A-Note</h1>
            <div className="flex justify-center items-center">
                <form onSubmit={handleOnSubmit} className="w-80 flex flex-col" noValidate>
                    <label htmlFor="email">Email</label>
                    <input placeholder="Enter Email" className="bg-indigo-950 my-2.5" type="email" name="email" id="email" onChange={(e) => setFormData({ ...formData, "email": e.target.value })} value={formData.email} />
                    <label htmlFor="password">{isSignUp ? "Create Password" : "Password"}</label>
                    <input placeholder="Enter Password" className="bg-indigo-950 my-2.5" type="password" name="password" id="password" onChange={(e) => setFormData({ ...formData, "password": e.target.value })} value={formData.password} />
                    {isSignUp ? confirmPassword : null}
                    <button className="my-5 py-2.5 w-full bg-indigo-950 hover:bg-indigo-900" type="submit">
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                </form>
            </div>
            <button className="hover:underline my-2.5" onClick={() => toggleMode()}>
                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </button>
        </main>

    )
}

export default Auth;