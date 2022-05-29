import homeImg from '../images/cluckieshome.png'
import fontLogo from '../images/main.png'


const Home = () => {
    return (
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
                            <a href="https://twitter.com/cluckiesxyz" className="btn">Twitter</a>
                            <a href="https://discord.gg/ZHEpvSVCxt" className="btn">Discord</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

