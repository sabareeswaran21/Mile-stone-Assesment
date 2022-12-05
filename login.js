import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom';


export default function Login(){

    const handelsubmit = async(event)=>{;
        event.preventDefault();
        var key= new FormData(event.target);
        var value ={headers:{"enctype":"multipart/form-data"}};

        var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;

        if(username===''||username===null){
            alert('enter valide username');
        }
        else if(password===''||password===null){
            alert('enter valide password');
        }
        else{}
    }
    return(
        <>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-lg-12 text-center'>
                    <h2>Log-In Form</h2>
                </div>
            </div>
            <form onSubmit={handelsubmit}>
            <div className='row mt-3'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2 text-center'>
                    <h5>User name:</h5>
                </div>
                <div className='col-lg-3'>
                    <input type='text' name='username' id='username' className='form-control'/>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-3'></div>
                <div className='col-lg-2 text-center'>
                    <h5>Password:</h5>
                </div>
                <div className='col-lg-3'>
                    <input type='password' name='pssword' id='password' className='form-control'/>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-3'></div>
                <div className='col-lg-5 text-center mt-3'>
                    <button type='submit' name='submit' className='btn btn-success'>Login</button>
                </div>
                
                <div className='col-lg-4'></div>
            </div>
            </form>

            
        </div>
        </>
    )
}