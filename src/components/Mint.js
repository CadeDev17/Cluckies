import CluckieCollage from '../images/cluckiescollage.png'

const Mint = () => {
    return (
        <section class="banner-container" id="mint">
            <div class="banner">
                <img src={CluckieCollage}/>
                <div class="mint-content">
                    <h3>Supply: 1,777</h3>
                    <h3>Price: 0.02 ETH</h3>
                    <h3>Free Mint: 77</h3>
                    <a href="#" class="btn">MINT NOW</a>
                </div>
            </div> 
        </section>
    )
}

export default Mint