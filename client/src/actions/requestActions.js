import {FETCH_DATA, NEW_REQUEST, SUBMIT_REQUEST} from './types';
import axios from "axios";

export function fetchData(){
    console.log('Getting Data');

    return function (dispatch) {
        const data = [{
            id: 'ID1',
            xml: 'this is an xml responce that one migt get',
            template: 'this is a templat'
        }, {
            id: 'ID2',
            xml: 'this is an xml responce that one migt get',
            template: 'this is a template'}]
        console.log("this will call express API to get data");
        dispatch({
          type: FETCH_DATA,
          payload: data
        });
    }  
}

export const newRequest = (requestData) => async (dispatch) => {
    requestData = JSON.stringify(requestData);
    const req = {instance: 'TEST GARLIC'};
    const res = await axios.post('http://localhost:5000/api/newrequest', req);
    console.log(res);
    dispatch({
        type: NEW_REQUEST, 
        payload: res.data
    })
}

export function submitRequest(requestData){
    // here we will POST the request and get the responce
    const data = {placeholder: "placeholder"}
    return function (dispatch){
        dispatch({
            type: SUBMIT_REQUEST,
            payload: data,
            request: requestData
        })
    }
}
