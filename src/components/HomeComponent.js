import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col p-2">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                            <h3>Bagels made fresh every day!</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-2">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >      
                            <img src={'../assets/images/restaurant1.jpg'} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >  
                        <div className="col-sm-6 p-4">
                            <img src={'../assets/images/freshbagels1.jpg'} alt="" />
                        </div>  
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <div className="col-sm-6 p-4">
                            <img src={'./assets/images/bagelcoffee1.jpg'} alt="" />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <h3><strong>Our Story.</strong>
                        <h5>This family-run business started in my momma's kitchen in 1997. After years of making bagels and perfecting recipes for Sunday brunch with the family, we have decided to spread the love (and cream cheese) for all of you! We would love to see you around the shop not only for breakfast, but to enjoy our serene atmostphere. You can't get the full Charlotte, NC experience without tasting <strong>Momma's Bagels</strong>. And don't even get us started on the fresh brewed coffee.</h5>
                            <hr></hr>
                            <h5>"Momma's Bagels employees went above and beyond to serve us during our visit to the shop! The bagels were delicious, and the employees made the experience even better!"</h5>
                            <hr></hr>
                            <h5>"After discovering Momma's Bagels, I stop by every Sunday. I just can't get enough! I don't know what is in their recipe, but I know you can't go wrong there."</h5>
                            <hr></hr>
                            <h5>"I have gotten Momma's Bagels 'specialty bagel' twice now and they were both fantastic!! They offer such a variety. I would highly recommend checking them out! Great service too."</h5>
                    </h3>
                </div>
            </div>
        );
    }
}

export default Home;