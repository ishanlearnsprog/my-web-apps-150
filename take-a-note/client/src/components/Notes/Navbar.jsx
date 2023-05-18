import { useUsersContext } from "../../hooks/useUsersContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
    const { dispatchUser } = useUsersContext();

    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatchUser({ type: "LOGOUT", payload: null });
    }

    return (
        <>
            <h1 className="logo">Take-A-Note</h1>
            <button className="logout" onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} size={"lg"} /></button>
        </>

    )
}

export default Navbar;