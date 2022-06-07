import homeImg from '../images/cluckieshome.png'


const Home = () => {
    return (
        <section className="home" id="home">
            <div className="slides-container">
                <div className="slide">
                    <div className="home-container">
                        <div className="home-content">
                            <h3>Hey clucker, make sure youre following us on twitter and clucking around in our discord with the rest of the mothercluckers</h3>
                            <a href="https://twitter.com/cluckiesxyz" className="btn">Twitter</a>
                            <a href="https://discord.gg/ZHEpvSVCxt" className="btn">Discord</a>
                        </div>
                        <div className="img home-img">
                            <img className="homeImg" src={homeImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

