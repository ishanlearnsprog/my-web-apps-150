
import Auth from "./pages/Auth.jsx";
import Store from "./pages/Store.jsx";
import { useUserContext } from "./contexts/UserContext.jsx"

const App = () => {
    const { user } = useUserContext();
    return (
        <div>
            {user.address && user.role ? <Store></Store> : <Auth></Auth>}
        </div>
    )
}

export default App;