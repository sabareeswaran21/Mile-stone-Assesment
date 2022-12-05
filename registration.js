import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom';
import axios from 'axios';


export default function Registration(){

    const handelsubmit = async(event)=>{;
    event.preventDefault();
    var key= new FormData(event.target);
    var value ={headers:{"enctype":"multipart/form-data"}};

    var firstname=document.getElementById('firstname').value;
    var lastname=document.getElementById('lastname').value ;
    var email= document.getElementById('email').value;
    var phone=document.getElementById('pnoneno').value;
    var pass=document.getElementById('password').value;
    
    if(firstname===''||firstname===null){
        alert('Enter your first name');
    }
    else if(lastname===''||lastname===null){
        alert('Enter your last name')
    }
    else if(email===''||email===null){
        alert('Enter your email');
    }
    else if(phone===''||phone===null){
        alert('Enter your Phone Number');
    }
    else if(pass===''||pass===null){
        alert('Enter your password');
    }
    else{
    await axios.post('http://localhost3002/reg',key,value)
    .then(function(Personalinfo){
        if(Personalinfo.data.key==='error'){
            alert('error');
            window.location.reload();
        }
        else if(Personalinfo.data.key==='success'){
            alert('success');
            window.location.reload();
        }
    })
    .catch(function(Personalinfo){
        alert(Personalinfo);
        window.location.reload();
    })
    }

}

    return(
        <>
        <div className='container'>
            <div className='row text-center'>
                <div className='col-lg-12 mt-5'>
                    <div className='head'>
                        <h1>Registration from</h1>
                    </div>
                </div>
            </div>
            <form onSubmit={handelsubmit}>
            <div className='row mt-4'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2 text-center'>
                    <h5>First-Name:</h5>
                </div>
                <div className='col-lg-3'>
                    <input type='text' name='firstname' id='firstname' className='form-control'/>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2 text-center'>
                    <h5>Last-Name:</h5>
                </div>
                <div className='col-lg-3'>
                    <input type='text' name='lastname' id='lastname' className='form-control'/>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2 text-center'>
                    <h5>Email:</h5>
                </div>
                <div className='col-lg-3'>
                    <input type='email' name='email' id='email' className='form-control'/>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2 text-center'>
                    <h5>Phone Number:</h5>
                </div>
                <div className='col-lg-3'>
                    <input type='text' name='phoneno' id='phoneno' className='form-control'/>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2 text-center'>
                    <h5>Password:</h5>
                </div>
                <div className='col-lg-3'>
                    <input type='password' name='password' id='password' className='form-control'/>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-12 text-center'>
                    <button type='submit' name='sumbit' id='submit' value='submit'className='btn btn-danger'>Submit</button>
                </div>
            </div>
            </form>
            
        </div>
        </>
    )
}