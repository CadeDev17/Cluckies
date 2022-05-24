const Faq = () => {
    return (
        <section>
            <section id="faq">
                <h1 class="title">FAQ <span>question</span> <a href="#">our medium page</a></h1>
            </section>

            <section class="faq">
                <div class="icons-container">
                    <div class="icons">
                        <i class="fas fa-bookmark"></i>
                        <h3>What are the clucking minting limits?</h3>
                        <p>Per wallet: unlimited // Per transaction: 10</p>
                    </div>

                    <div class="icons">
                        <i class="fas fa-money-bill-alt"></i>
                        <h3>What is the cost?</h3>
                        <p>Free: 77 / Public-Sale: 0.02 ETH</p>
                    </div>

                    <div class="icons">
                        <i class="fas fa-cookie"></i>
                        <h3>What is the total supply?</h3>
                        <p>1,777</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Faq
