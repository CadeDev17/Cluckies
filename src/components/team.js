import Owner from '../images/owner.png'
import Developer from '../images/Developer.png'
import Developer1 from '../images/Developer1.png'
import communityManager from '../images/communitymanager.png'
import Marketer from '../images/royalcluckie.png'


const Team = () => {
    return (
        <section>
            <section className="teams">
                <h1 className="title">Our <span>team</span></h1>
            </section>


            <section>
                <div className="team-container">

                    <div className="team-box">
                        <div className="team-img-container">
                            <img className="teamImg" src={Owner}/>
                        </div>
                        <div className="team-content">
                            <div className="icons">
                                <a className="fas fa-calendar calendar-icon">6+ yrs</a>
                                <a className="fas fa-user">Cluckie Founder / Artist</a>
                            </div>
                            <h3>Master Cluck</h3>
                            <p>I am here to take Cluckies to the COOP that just so happens to be on the moon. I will use 'cluck' in every sentence. Cluck it.</p>
                        </div>
                    </div>

                    <div className="team-box">
                        <div className="team-img-container">
                            <img className="teamImg" src={Marketer}/>
                        </div>
                        <div className="team-content">
                            <div className="icons">
                                <a className="fas fa-calendar calendar-icon">10+ yrs</a>
                                <a className="fas fa-user">Cluckster Marketer</a>
                            </div>
                            <h3>Super Cluck</h3>
                            <p>Its a cluck, no its a cluck!, no... its Super Cluck. Here to cluck'n market this bitch to the moon</p>
                        </div>
                    </div>

                    <div className="team-box">
                        <div className="team-img-container">
                            <img className="teamImg" src={Developer1}/>
                        </div>
                        <div className="team-content">
                            <div className="icons">
                                <a className="fas fa-calendar calendar-icon">2+ yrs</a>
                                <a className="fas fa-user">Cluckchain  Developer</a>
                            </div>
                            <h3>Cluck'n Clucker</h3>
                            <p>I like to cluck... i mean code.</p>
                        </div>
                    </div>

                    <div className="team-box">
                        <div className="team-img-container">
                            <img className="teamImg" src={communityManager}/>
                        </div>
                        <div className="team-content">
                            <div className="icons">
                                <a className="fas fa-calendar calendar-icon">15+yrs</a>
                                <a className="fas fa-user">Community  Manacluck</a>
                            </div>
                            <h3>Community Cluck</h3>
                            <p>Bringing all the cluckers together so we can all be one big happy cluck'n family</p>
                        </div>
                    </div>

                    <div className="team-box">
                        <div className="team-img-container">
                            <img className="teamImg" src={Developer}/>
                        </div>
                        <div className="team-content">
                            <div className="icons">
                                <a className="fas fa-calendar calendar-icon">3+ yrs</a>
                                <a className="fas fa-user">Cluckchain  Developer</a>
                                <h3>Cluck'n Dev</h3>
                                <p>
                                    Full time cluckchain developer. Part time Mother Clucker ;)
                                </p>
                            </div>    
                        </div>
                    </div>

                </div>
            </section>
        </section>
    );
}

export default Team