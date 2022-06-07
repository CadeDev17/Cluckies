
import fontLogo from '../images/main.png'

const Navbar = ({ web3Handler, account, explorerURL }) => {
    return (
        <nav className="navbar fixed-top mx-3">
            <header className="header">
                <img class="nav--logo" src={fontLogo} />

                <div className="navbar">
                    <a href="#home">The Farm</a>
                    <a href="#mint">Mint</a>
                    <a href="#rarities">Rarities</a>
                    <a href="#chickencoop">The Chicken Coop</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#faq">FAQ</a>
                    
                </div>

                <div className="icons">
                    <a href="#" id="search-btn" className="fa-brands fa-twitter"></a>
                    <a href="https://discord.gg/ZHEpvSVCxt" id="cart-btn" className="fa-brands fa-discord"></a>
                    <a href="#" id="login-btn" className="fa-brands fa-fort-awesome"></a>
                </div>

                {account ? (
                    <a
                    href={`${explorerURL}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-btn">
                        {account.slice(0, 5) + '...' + account.slice(38, 42)}
                    </a>
                ) : (
                    <button onClick={web3Handler} className="nav-btn">Connect Wallet</button>
                    )}
            </header>
        </nav>
    )
}

export default Navbar;