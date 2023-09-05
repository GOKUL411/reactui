import axios from "axios";


const username='Gokul'
//If i enter wrong password we are unable to access end point
const password='1811321'
const authHeader=`Basic ${btoa(`${username}:${password}`)}`
const headers={ 'Authorization' : authHeader, 'Content-Type':'application/json'}

const postCustomer=(data)=>axios.post(`http://localhost:8080/customer/postAppliancid`,data,{headers})

const getCustomer=()=>axios.get('http://localhost:8080/customer/getApplianceid',{headers})

const updateCustomer=(data)=>axios.put(`http://localhost:8080/customer/updateApplianceid`,data,{headers})

const deleteCustomer=(customerID)=>axios.delete(`http://localhost:8080/customer/deleteApplianceid/${customerID}`,{customerID})

const getCustomerById=(customerID)=>axios.get(`http://localhost:8080/students/${customerID}`,{customerID})
const userLogin=(data)=>axios.post(`http://localhost:8080/signin`,data,{headers})
const userSignup = (data)=> axios.post(`http://localhost:8080/signup`,data,{headers})

export{userLogin,userSignup,getCustomerById, postCustomer,getCustomer,updateCustomer,deleteCustomer}