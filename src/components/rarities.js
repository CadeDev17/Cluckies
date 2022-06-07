import Common from '../images/common.png'
import Uncommon from '../images/uncommon.png'
import Rare from '../images/rare.png'
import Epic from '../images/epic.png'
import Mythic from '../images/mythic.png'
import Extraordinary from '../images/extraordinary.png'
import Questionmark from '../images/questionmark.png'


const Rarities = () => {
    return (
        <section>
            <h1 className="title"><span>Rarities</span><a href="#">view on opensea</a> </h1>
            <section className="story" id="rarities">

                <div className="box-container">

                    <div className="box">
                        <div className="icons">
                            <a className="fa-solid fa-0"></a>
                            <a className="fa-solid fa-0"></a>
                            <a className="fa-solid fa-1"></a>
                        </div>
                        <div className="img">
                            <img src={Common}/>
                        </div>
                        <div className="content">
                            <h3>Common Cluckie</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i> 
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icons">
                            <a className="fa-solid fa-0"></a>
                            <a className="fa-solid fa-2"></a>
                            <a className="fa-solid fa-5"></a>
                        </div>
                        <div className="img">
                            <img src={Uncommon}/>
                        </div>
                        <div className="content">
                            <h3>Uncommon Cluckie</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i> 
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icons">
                            <a className="fa-solid fa-0"></a>
                            <a className="fa-solid fa-5"></a>
                            <a className="fa-solid fa-0"></a>
                        </div>
                        <div className="img">
                            <img src={Rare}/>
                        </div>
                        <div className="content">
                            <h3>Rare Cluckie</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icons">
                            <a className="fa-solid fa-0"></a>
                            <a className="fa-solid fa-7"></a>
                            <a className="fa-solid fa-5"></a>
                        </div>
                        <div className="img">
                            <img src={Epic}/>
                        </div>
                        <div className="content">
                            <h3>Epic Cluckie</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i> 
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icons">
                            <a className="fa-solid fa-1"></a>
                            <a className="fa-solid fa-0"></a>
                            <a className="fa-solid fa-0"></a>
                        </div>
                        <div className="img">
                            <img src={Mythic}/>
                        </div>
                        <div className="content">
                            <h3>Mythic Cluckie</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icons">
                            <a className="fa-solid fa-5"></a>
                            <a className="fa-solid fa-5"></a>
                            <a className="fa-solid fa-5"></a>
                        </div>
                        <div className="img">
                            <img src={Extraordinary}/>
                        </div>
                        <div className="content">
                            <h3>Exceptional Cluckie</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icons">
                            <a className="fa-solid fa-1"></a>
                            <a className="fa-solid fa-1"></a>
                            <a className="fa-solid fa-1"></a>
                            <a className="fa-solid fa-1"></a>
                        </div>
                        <div className="img">
                            <img src={Questionmark}/>
                        </div>
                        <div className="content">
                            <h3>1/1 Cluckie</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>  
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Rarities 