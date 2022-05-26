
const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="footer-box-container">
                    <div className="box">
                        <h3>Quick Links</h3>
                            <a href="#home"> <i className="fa fa-arrow-right"></i>Home</a>
                            <a href="#mint"> <i className="fa fa-arrow-right"></i>Mint</a>
                            <a href="#rarities"> <i className="fa fa-arrow-right"></i>Rarities</a>
                            <a href="#chickencoop"> <i className="fa fa-arrow-right"></i>Chicken Coop</a>
                            <a href="#roadmap"> <i className="fa fa-arrow-right"></i>Roadmap</a>
                            <a href="#faq"> <i className="fa fa-arrow-right"></i>FAQ</a>
                    </div>

                    <div className="box">
                        <h3>Extra Links</h3>
                            <a href="#"> <i className="fa fa-arrow-right"></i> Our Notion Page</a>
                            <a href="#"> <i className="fa fa-arrow-right"></i> IMB Labs</a>
                            <a href="#"> <i className="fa fa-arrow-right"></i> OpenSea</a>
                            <a href="#"> <i className="fa fa-arrow-right"></i> terms or use</a>
                            <a href="#"> <i className="fa fa-arrow-right"></i> policy</a>
                    </div>

                    <div className="box">
                        <h3>Follow Us</h3>
                        <a href="#"> <i className="fab fa-twitter"></i> twitter</a>
                        <a href="#"> <i className="fab fa-instagram"></i> instagram</a>
                        <a href="#"> <i className="fab fa-discord"></i> Discord</a>
                        <a href="#"> <i className="fab fa-tiktok"></i> Tik Tok</a>
                    </div>
                </div>
            </section>

            <section className="credit">Created by <span>IMB Labs ®</span></section>
        </footer>
    );
}

export default Footer

