const NoWallet = () => {
    return (
        <main className="nowallet-container">
            <h1>Please install Metamask</h1>
            <button onClick={() => window.location.reload(true)}>Refresh</button>
        </main>
    )
}

export default NoWallet;