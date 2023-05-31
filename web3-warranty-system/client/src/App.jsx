
import Auth from "./pages/Auth.jsx";
import Store from "./pages/Store.jsx";
import { useUserContext } from "./contexts/UserContext.jsx"

const App = () => {
    const { user } = useUserContext();
    return (
        <>
            {user.address && user.role ? <Store></Store> : <Auth></Auth>}
        </>
    )
}

export default App;