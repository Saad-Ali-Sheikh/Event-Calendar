import React from 'react';
import './Register.css';

function Register ({OnrouteChange})
{
    return (
        <div>
            <form className="Sign-up form" action="" method="post">
                <i className="fa fa-user-plus"></i>
                <input className="user-input" type="text" name="" placeholder="Username" required></input> 
                <input className="user-input" type="email" name="" placeholder="Emailaddress" required></input> 
                <input className="user-input" type="password" name="" placeholder="Password" required></input> 
                <input className="btn" type="submit" name="" value="SIGN UP" onClick={()=>OnrouteChange("Home")}></input>
                <div className="option-02">
                    <p >Already Registered  <a href="#" onClick={()=>OnrouteChange("Signin")}>SIGN IN</a></p>
                </div>
            </form>     
        </div>
    );

}
export default Register;