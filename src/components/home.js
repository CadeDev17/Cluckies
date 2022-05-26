import homeImg from '../images/cluckieshome.png'
import fontLogo from '../images/main.png'


const Home = () => {
    return (
        <section>
            <header className="header">
                <a href="#" className="logo"> <i className="fa-brands fa-earlybirds"></i> Cluckies </a>

                <nav className="navbar">
                    <a href="#home">The Farm</a>
                    <a href="#mint">Mint</a>
                    <a href="#rarities">Rarities</a>
                    <a href="#chickencoop">The Chicken Coop</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <div className="icons">
                    <a id="menu-btn" className="fas fa-bars"></a>
                    <a href="#" id="search-btn" className="fa-brands fa-twitter"></a>
                    <a href="https://discord.gg/ZHEpvSVCxt" id="cart-btn" className="fa-brands fa-discord"></a>
                    <a href="#" id="login-btn" className="fa-brands fa-fort-awesome"></a>
                </div>
            </header>

            {/* Home section */}
            <section className="home" id="home">
                <div className="slides-container">
                    <div className="slide">
                        <div className="content">
                            <div className="slideimg">
                                <img src={fontLogo}/>
                            </div>
                            <div className="img">
                                <img className="homeImg" src={homeImg} alt=""/>
                            </div>
                            <h3>Hey clucker, make sure youre following us on twitter and clucking around in our discord with the rest of the mothercluckers</h3>
                                <a href="#" className="btn">Twitter</a>
                                <a href="#" className="btn">Discord</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home

