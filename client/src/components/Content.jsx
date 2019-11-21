import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/requestActions';

class Content extends Component {
    componentWillMount(){
        this.props.fetchData();
    }
    render() { 
        return ( <div>
            <h1>Content</h1>
        </div> );
    }
}

const mapStateToProps = state => ({
    data: state.responceData.data
})
 
export default connect (mapStateToProps, {fetchData})(Content) ;