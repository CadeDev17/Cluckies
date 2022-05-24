const Home = () => {
    return (
        <section>
            <header class="header">
                <a href="#" class="logo"> <i class="fa-brands fa-earlybirds"></i> Cluckies </a>

                <nav class="navbar">
                    <a href="#home">The Farm</a>
                    <a href="#mint">Mint</a>
                    <a href="#rarities">Rarities</a>
                    <a href="#chickencoop">The Chicken Coop</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <div class="icons">
                    <a id="menu-btn" class="fas fa-bars"></a>
                    <a href="#" id="search-btn" class="fa-brands fa-twitter"></a>
                    <a href="https://discord.gg/ZHEpvSVCxt" id="cart-btn" class="fa-brands fa-discord"></a>
                    <a href="#" id="login-btn" class="fa-brands fa-fort-awesome"></a>
                </div>
            </header>

            {/* Home section */}
            <section class="home" id="home">
                <div class="slides-container">

                    <div class="slide active">
                        <div class="content">
                            <div class="slideimg">
                                <img src="img/main.png"/>
                            </div>
                            <h3>Cluck, grab one of our 1,777 Cluckies and become the first mothercluckers on the Ethereum mainnet.</h3>
                                <a href="#" class="btn">twitter</a>
                                <a href="#" class="btn">opensea</a>
                        </div>
                        <div class="img">
                            <img src="img/main1.png" alt=""/>
                        </div>
                    </div>

                    <div class="slide">
                        <div class="content">
                            <div class="slideimg">
                                <img src="img/main.png"/>
                            </div>
                            <h3>Hey clucker, make sure youre following us on twitter and clucking around in our discord with the rest of the mothercluckers</h3>
                                <a href="#" class="btn">twitter</a>
                                <a href="#" class="btn">opensea</a>
                        </div>
                        <div class="img">
                            <img src="img/main2.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div id="next-slide"class="fas fa-angle-right" onclick="next()"></div>
                <div id="prev-slide"class="fas fa-angle-left" onclick="next()"></div>
            </section>
        </section>
    )
}

export default Home

