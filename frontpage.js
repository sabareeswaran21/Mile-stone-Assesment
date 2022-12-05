import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
export default function Frontpage(){

    



    return(
        <>
        <div className='container'>
            <div className='row mt-5 text-center'>
                <div className='col-lg-4'></div>
                <Link to={'/login'}>
                    <div className='col-lg-3'>
                        <button type='button' name='button' className='btn btn-danger'>Login</button>
                    </div>
                </Link>
                    
                <Link to={'/reg'}>
                    <div className='col-lg-3'>
                        <button type='button' name='button1' className='btn btn-danger'>Registration</button>
                    </div>
                </Link>
                <Link to={'/dashboard'}>
                    <div className='col-lg-3'>
                        <button type='button' name='button2' className='btn btn-danger'>Dashboard</button>
                    </div>
                </Link>
                
            </div>
        </div>
        </>
    )
}