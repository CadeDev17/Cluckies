const faq = () => {
    return (
        <section>
            <section id="faq">
                <h1 className="title">FAQ<a href="#">Our medium page</a></h1>
            </section>

            <section className="faq">
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-bookmark"></i>
                        <h3>What are the clucking minting limits?</h3>
                        <p>Per wallet: unlimited // Per transaction: 10</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-money-bill-alt"></i>
                        <h3>What is the cost?</h3>
                        <p>Free: 77 / Public-Sale: 0.02 ETH</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-cookie"></i>
                        <h3>What is the total supply?</h3>
                        <p>1,777</p>
                    </div>

                    <div className="icons">
                        <i className="fas fa-egg"></i>
                        <h3>How many clucks do we give about your opinion?</h3>
                        <p>none.</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Faq
