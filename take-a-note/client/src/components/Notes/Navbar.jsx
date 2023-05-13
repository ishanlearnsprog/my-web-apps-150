import { useUsersContext } from "../../hooks/useUsersContext";

const Navbar = () => {
    const { dispatch } = useUsersContext();

    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT", payload: null });
    }

    return (
        <div className="flex justify-between align-middle">
            <h1 className="m-2.5 text-3xl">Take-A-Note</h1>
            <button onClick={handleLogout} className="m-2.5 hover:underline">Logout</button>
        </div>

    )
}

export default Navbar;