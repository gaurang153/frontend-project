import { Link } from 'react-router-dom'

function HomePage(){

    return(

        <div className='row'>
        <div className='col-1'>
            <Link to="/reg/customer">Customer Register</Link>
        </div>
        <div className='col-1'>
            <Link to="/reg/vendor">Vendor Register</Link>
        </div>
        <div className='col-1'>
            <Link to="/login/vendor">Vendor Login</Link>
        </div>
        <div className='col-1'>
            <Link to="/login/customer">Customer Login</Link>
        </div>
      
        </div>
    )
}

export default HomePage;