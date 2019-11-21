import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <nav className="navbar navbar-light bg-light" style={{borderBottomStyle: 'solid', borderColor: "rgb(204, 204, 204)", borderWidth: 1}}>
            <span className="navbar-brand" style={{color: "#222222", borderRightStyle: "solid", borderWidth: 1, paddingRight: 20, borderColor: "rgb(204, 204, 204)"}}>Fallower</span>
            <button className="btn btn-light my-2 my-sm-0" style ={{width: 40, height: 40, borderRadius: 20 , borderStyle: "solid", borderWidth: 1, borderColor: "rgb(204, 204, 204)", color: "#222222"}}>?</button>
        </nav> );
    }
}
 
export default Header;