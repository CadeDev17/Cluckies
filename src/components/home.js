const Home = () => {
    return (
        <section>
            <header className="header">
                <a href="#" className="logo"> <i class="fa-brands fa-earlybirds"></i> Cluckies </a>

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

                    <div className="slide active">
                        <div className="content">
                            <div className="slideimg">
                                <img src="img/main.png"/>
                            </div>
                            <h3>Cluck, grab one of our 1,777 Cluckies and become the first mothercluckers on the Ethereum mainnet.</h3>
                                <a href="#" className="btn">twitter</a>
                                <a href="#" className="btn">opensea</a>
                        </div>
                        <div className="img">
                            <img src="img/main1.png" alt=""/>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="content">
                            <div className="slideimg">
                                <img src="img/main.png"/>
                            </div>
                            <h3>Hey clucker, make sure youre following us on twitter and clucking around in our discord with the rest of the mothercluckers</h3>
                                <a href="#" className="btn">twitter</a>
                                <a href="#" className="btn">opensea</a>
                        </div>
                        <div className="img">
                            <img src="img/main2.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div id="next-slide"className="fas fa-angle-right" onClick="next()"></div>
                <div id="prev-slide"className="fas fa-angle-left" onClick="next()"></div>
            </section>
        </section>
    )
}

export default Home

