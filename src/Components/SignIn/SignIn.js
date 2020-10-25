import React from 'react';
import './SignIn.css';

function SignIn ({OnrouteChange})
{
    return (
        <div>
            <form className="Sign-up form" action="" method="post">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
                <input className="user-input" type="text" name="" placeholder="Username" required></input> 
                <input className="user-input" type="password" name="" placeholder="Password" required></input> 
                <input className="btn" type="submit" name="" value="LOGIN" onClick={()=>OnrouteChange("Home")}></input>
                <div className="option-02">
                    <p>Not Registered?  <a href="#" onClick={()=>OnrouteChange("Register")}>Create an Account</a></p>
                </div>
            </form>
        </div>
    );

}
export default SignIn;