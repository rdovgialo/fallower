import React, { Component } from 'react';
import Form from './Form';
class FormBar extends Component {
    state = {  }
    render() { 
        return ( <div className = "formContainer" style = {{borderRightStyle: 'solid', borderWidth: 1, borderColor: "rgb(204, 204, 204)"}}>
            <span className= "formTitle" style={{borderBottomStyle: 'solid', borderWidth: 1, borderColor: "rgb(237, 237, 237)", color: "#222222"}}>Select Client</span>
                <Form/>
        </div> );
    }
}
 
export default FormBar;