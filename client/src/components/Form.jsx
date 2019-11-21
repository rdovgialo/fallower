import React, { Component } from 'react';
import {connect} from 'react-redux';
import {newRequest} from '../actions/requestActions';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            instance: '',
            locales: '',
            plugin: '',
            pluginVersion: ''
        }
        this.onChange =  this.onChange.bind(this);
        this.onSubmit =  this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();
        const request = {
            instance: this.state.instance,
            locales: this.state.locales,
            plugin: this.state.plugin,
            pluginVersion: this.state.pluginVersion
        }
        this.props.newRequest(request);
    }
    render() { 
        return ( <form onSubmit={this.onSubmit}>
            <div style={{marginTop: 15, marginLeft: 30, overflow: 'hidden'}}>
                <div className="form-group" >
                    <label className="formLabel">Instance name: </label>
                    <input className="input" name = "instance" onChange={this.onChange} value={this.state.instance} ></input>
                </div>
                <div className="form-group">
                    <label className="formLabel">Locales: </label>
                    <input className="input" name = "locales" value={this.state.locales} onChange={this.onChange}></input>
                </div>
                <div className="form-group">
                    <label className="formLabel">PlugIn Used: </label>
                    <input className="input" name = "plugin" value={this.state.plugin} onChange={this.onChange}></input>
                </div>
                <div className="form-group">
                    <label className="formLabel">PlugIn Version: </label>
                    <select className="dropdown" name = "pluginVersion" value={this.state.pluginVersion} onChange={this.onChange}>
                        <option>N/A</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <span className = "scopeLabel">Scope: </span>
                <div className="scope" style={{display: "flex", marginBottom: 30}}>
                    
                    <div className="checkboxContainer">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="rnr"></input>
                            <label className="form-check-label" >
                                R&amp;R
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="QnA"></input>
                            <label className="form-check-label" >
                                Q&amp;A
                            </label>  
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="inline"></input>
                            <label className="form-check-label" >
                                Inline Ratings
                            </label>  
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="SEOSDK"></input>
                            <label className="form-check-label" >
                                SEO SDK
                            </label>  
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="DCC"></input>
                            <label className="form-check-label" >
                                DCC
                            </label>  
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="catalogFeed"></input>
                            <label className="form-check-label" >
                                Catalog Feed
                            </label>  
                        </div>
                    </div>

                    <div className="checkboxContainer">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="APIdisplay"></input>
                            <label className="form-check-label" >
                                API display
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="APIsubmission"></input>
                            <label className="form-check-label" >
                                APIsubmission
                            </label>  
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="curations"></input>
                            <label className="form-check-label" >
                                Curations
                            </label>  
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="APIcurations"></input>
                            <label className="form-check-label" >
                                Curations API
                            </label>  
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="BVpixel"></input>
                            <label className="form-check-label" >
                                BV pixel
                            </label>  
                        </div>
                    </div>

                </div>
                
            </div>
            
            <div style={{display: "flex", textAlign: "center"}}>
                    <button type="submit" className="btn btn-outline-success" style={{margin: "0 auto"}}>Generate</button>
                </div>
            
        </form> );
    }
}
 
export default connect(null, {newRequest})(Form);