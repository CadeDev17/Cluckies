import BuildingCoop from '../images/buildingcoop.png'
import LayingSeason from '../images/layingseason.png'
import Staking from '../images/staking.png'
import BabyCluck from '../images/babycluck.png'
import Merch from '../images/merch.png'
import Roadmap2 from '../images/Roadmap2.png'

const Roadmap = () => {
    return (
        <section>
            <section>
                <h1 className="title">Roadmap</h1>
            </section>

            <section className="roadmap" id="roadmap">
                <div className="swiper mySwiper roadmap-slider">
                    <div className="swiper-wrapper wrapper">

                        <div className="swiper-slide slide">
                            <div className="user">
                                <div className="user-info">
                                    <img src={BuildingCoop}/>
                                    <h3>Building the coop</h3>
                                </div>
                            </div>
                            <p>
                                The chicken coop consists of our discord, twitter,
                                website, and any other cluck'n social media platforms 
                                we want to be on.
                            </p> 
                            <br></br>
                            <p>
                                Once created, we will start collaborating
                                with other communities that are on brand with the mother clucker 
                                mentality. mfrs get free whitelist spots. you're welcome.
                            </p>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="user">
                                <div className="user-info">
                                    <img src={LayingSeason}/>
                                    <h3>Laying Season</h3>
                                </div>
                            </div>
                            <p>- Date: tbd</p>
                            <p>- Supply: 1,777</p>
                            <p>- Free-Mint Supply: 77</p>
                            <p>- Public Sale: 1,700 (0.02 ETH)</p>
                        </div>
                        <div className="swiper-slide slide">
                            <div className="user">
                                <div className="user-info">
                                    <img src={Staking}/>
                                    <h3>Staking for $EGGS</h3>
                                </div>
                            </div>
                            <p>Now that you are a true mother clucker, 
                                sit your ass down in a nest and start laying 
                                some $EGGS so you can get your baby clucks.
                            </p>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="user">
                                <div className="user-info">
                                    <img src={Merch}/>
                                    <h3>MERCH</h3>
                                </div>
                            </div>
                            <p>Community will pick ALL the merch options we will have on our merchant site</p>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="user">
                                <div className="user-info">
                                    <img src={BabyCluck}/>
                                    <h3>Baby Clucks available for staked Cluckies</h3>
                                </div>
                            </div>
                            <p>
                                Simple enough, stake your Cluckie, lay some $EGGS and then wait
                                for them to hatch and BOOM you are starting your own cluck'n 
                                family
                            </p>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="user">
                                <div className="user-info">
                                    <img src={Roadmap2}/>
                                    <h3>ROADMAP 2.Cluck</h3>
                                </div>
                            </div>
                            <p>Mother CLUCK!! We are expanding and building so much we will need a new fuck'n roadmap!</p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
}

export default Roadmap
