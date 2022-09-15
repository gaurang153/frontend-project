import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'


function CustomerLogin() {

    const navigate = useNavigate();
    const [emailMsg, setEmailMsg] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");
    const [authMessage, setAuthMessage] = useState("");

    function handleSubmit(e){
        

        e.preventDefault();


        const user = {
            email : e.target.email.value,
            password : e.target.password.value
        }

        axios.post("http://localhost:8080/login/customer", user, { headers : {
            'Content-Type' : 'application/json'
        }})
        .then(response=> {
            if(response.status === 200){
                localStorage.setItem("customer" ,JSON.stringify(response.data))
                // window.location = '/dashboard/customer'
                navigate("/dashboard/customer")

            }
        })
        .catch(err=> {
            console.log(err)
            setAuthMessage(("Invalid Credentials"))
        });
    }

    return(

        <div className='container-fluid'>
            
            <h2 className='text-center mb-5'>Customer Login</h2>
            <div className='row'><div className='text-danger text-center'>{authMessage}</div></div>
            <form onSubmit={handleSubmit} method="post">
            <div className="row g-3 mb-3 justify-content-center">
                    <label htmlFor="Email" className="col-1 text-end">Email</label>

                    <input type="email" name="email" id="email" className="col-auto" onBlur={(e)=> {e.preventDefault();
                        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
                            
                            setEmailMsg("")
                        }
                            
                        else{
                            
                            setEmailMsg("Email is invalid");

                        }
                            
                    } }/>
                    <span className="text-danger col-1">{emailMsg}</span>

                </div>
                <div className="row g-3 mb-3 justify-content-center">
                    <label htmlFor="Password" className="col-1 text-end">Password</label>
                    <input type="password" name="password" id="password" className="col-auto" onBlur={(e) => {
                        // /((?=.\d)(?=.[a-z])(?=.[#@$]).{5,20})/.test(e.target.value)
                        if(true){
                            setPasswordMsg("")
                        }
                        else{
                            setPasswordMsg("Password is Invalid")
                        }
                        }}/>
                        <span className="text-danger col-1">{passwordMsg}</span>
                </div>
                <div className="row g-3 justify-content-center mb-3">
                    <input type="submit" value="Login" className="btn-primary col-1" />
                </div>
                <div className='row'>
                        <span className='text-center'>New Customer? Register <Link to="/reg/customer">Here</Link> </span>
                </div>
                <div className='row'>
                        <span className='text-center'><Link to="/login/vendor">Vendor Login </Link> </span>
                </div>
            </form>
        </div>
    )
}

export default CustomerLogin;