import { useNumberStoreContext } from "../contexts/useNumberStoreContext.jsx";

const UpdatesCount = () => {
    const { updatesCount } = useNumberStoreContext();
    return (
        <h1>This number has been updated {updatesCount} times</h1>
    )
}

export default UpdatesCount;