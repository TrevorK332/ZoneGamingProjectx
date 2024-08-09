import Head from "./Head.jsx";
import {Link} from "react-router-dom";

export default function Games() {

    return (
        <>
            <Head/>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>GAMES</h3>
                            <span className="breadcrumb"><Link to="/">Home</Link> {">"} Games</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section trending">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>Trending</h6>
                                <h2>Trending Games</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to="/category">View All</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/trending-01.jpg" alt=""/></Link>
                                    <span className="price"><em>$28</em>$18</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>WarFrame VeilBreaker</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/trending-02.jpg" alt=""/></Link>
                                    <span className="price"><em>$32</em>$20</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Tower Of Fantasy</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/trending-03.jpg" alt=""/></Link>
                                    <span className="price"><em>$45</em>$30</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>Super People</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/infamous.png" alt=""/></Link>
                                    <span className="price"><em>$32</em>$22</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>Infamous</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section most-played">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>TOP GAMES</h6>
                                <h2>Most Played</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to="/category">View All</Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/top-game-02.jpg" alt=""/></Link>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>PUBG Battlegrounds</h4>
                                    <Link to="/product">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/top-game-03.jpg" alt=""/></Link>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>Apex Legends</h4>
                                    <Link to="/product">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/top-game-04.jpg" alt=""/></Link>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>The SIMS 4</h4>
                                    <Link to="/product">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/top-game-05.jpg" alt=""/></Link>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Lost Arc</h4>
                                    <Link to="/product">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/top-game-06.jpg" alt=""/></Link>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <h4>Destiny 2</h4>
                                    <Link to="/product">Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="shop">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h6>Our Shop</h6>
                                            <h2>Go Pre-Order Buy & Get Best <em>Prices</em> For You!</h2>
                                        </div>
                                        <div className="main-button">
                                            <Link to="/category" className="is_active">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p>Copyright © 2024 ZONE. All rights reserved. &nbsp;&nbsp;</p>
                    </div>
                </div>
            </footer>
        </>
    )
}