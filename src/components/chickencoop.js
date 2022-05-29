import coopImg from '../images/Coop.png'

const Chickencoop = () => {
    return (
        <section>
            <section id="chickencoop">
                <h1 className="title"> The <span>Chicken Coop</span> <a href="https://discord.gg/ZHEpvSVCxt">Join the chicken coop</a> </h1>
            </section>
            <section className="firepit">
                <div className="content">
                    <h3>Coop Requirements:</h3>
                    <p>
                        You must be an active mother clucker in the community and give the least amount of clucks.
                    </p>
                    <br></br>
                    <p>
                        Only 77 cluckers will be able to join The Chicken Coop and claim their ability to mint for FREE.
                    </p>
                    <a href="https://discord.gg/ZHEpvSVCxt" className="btn">Discord</a>
                </div>

                <div className="img">
                    <img src={coopImg}/>
                </div>
            </section>
        </section>
    );
}

export default Chickencoop
