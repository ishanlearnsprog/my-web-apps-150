import { useUsersContext } from "../../hooks/useUsersContext";

const Navbar = () => {
    const { dispatch } = useUsersContext();

    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT", payload: null });
    }

    return (
        <>
            <h1>Take-A-Note</h1>
            <button onClick={handleLogout}>Logout</button>
        </>

    )
}

export default Navbar;