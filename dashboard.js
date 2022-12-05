import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';


export default function Dashboard(){

    const [Personalinfo,setPersonlinfo]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3002/personalinfo')
        .then(info=>info.json());
        .then(json=>setPersonlinfo(json))

    },[])


    return(
        <>
        <div className='container'>
            <div className='row text-center mt-5'>
                <div className='col-lg-12'>
                    <h2>Dashboard Details</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5>Personal Info</h5>
                        </div>
                        <div className='card-body'>
                            <p>First-name:</p>
                            <p>Last-name:</p>
                            <p>Email:</p>
                            <p>Phone No:</p>
                            <p>Password:</p>
                        </div>
                        <div className='data'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}