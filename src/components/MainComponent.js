import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import '../App.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/Home' component={Home} />
                    <Route path='/Menu' component={Menu} />
                    <Route path='/Contact' component={Contact} />
                    <Redirect to='/Home' component={Home} />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;