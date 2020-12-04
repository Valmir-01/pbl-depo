import React from 'react';

const SignUp = () => {
    return (
        <>
            <div className="login-clean">
                <form method="post">
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration">
                        <h1 id="welcome">Welcome&nbsp;</h1>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Password"/>

                        <input className="form-control" type="password" name="password" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group d-flex d-md-flex justify-content-center justify-content-md-center">
                        <a className="btn btn-light action-button" role="button" id="signup">Sign Up</a>
                    </div>
                    <a className="forgot">Forgot your email or password?</a>
                </form>
            </div>
        </>
    )
}

export default SignUp;