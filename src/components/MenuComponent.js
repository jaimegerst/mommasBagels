import React, { Component } from 'react';
import ItemsComponent from './ItemsComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <header className="App-header">
                        <h2 className="App-title">Menu</h2>
                    </header>
                </div>
                <ItemsComponent /> 
            </div>
        );
    }
}

export default App;