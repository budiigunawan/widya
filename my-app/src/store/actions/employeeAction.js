import swal from 'sweetalert';
import axios from 'axios';

// const url = 'http://localhost:5000/api/employees';
const url = 'https://infinite-tor-65239.herokuapp.com/api/employees';

export function getEmployees(page=1){
    return (dispatch) => {
        axios({
            url: `${url}?page=${page}&limit=10`,
            method: 'get'
        })
        .then(response => {
            dispatch({
                type: 'GET_EMPLOYEES',
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err);
            swal("Error!","Cannot Retrieve Employees","error")
        })
    }
}

export function addEmployee(input){
    return (dispatch) => {
        axios({
            url,
            method: 'post',
            data: input
        })
        .then(response => {
            dispatch({
                type: 'SET_EMPLOYEE',
                payload: response.data
            })
            swal("Done!","New Employee has been added","success")
        })
        .catch(err => {
            console.log(err.response.data.errors);
            swal("Error!","Cannot Retrieve Employees","error")
        })
    }
}

export function getEmployeeByNik(nik){
    return (dispatch) => {
        axios({
            url: `${url}/${nik}`,
            method: 'get'
        })
        .then(response => {
            dispatch({
                type: 'SET_EMPLOYEE',
                payload: response.data.employee
            })
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function editEmployee(nik,input){
    return (dispatch) => {
        axios({
            url: `${url}/${nik}`,
            method: 'put',
            data: input
        })
        .then(response => {
            swal("Done!","Employee has been edited","success")
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function removeEmployee(nik){
    return (dispatch)=>{
        axios({
            url: `${url}/${nik}`,
            method: "delete"
        })
        .then(response=>{
            swal("Done!","Employee deleted","success")
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            swal("Error!",err.response.data.error,"error")
        })
    }
}