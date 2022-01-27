import React from "react";
// reactstrap components
import { Button } from "reactstrap";

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}


function Login() {

    const handleSubmit = async (event) => {
        event.preventDefault()
        let data = {email: event.target.email.value, password: event.target.password.value}
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        try {  
            const fetchResponse = await fetch(`http://projects.nurtech.org/api/login`, settings);
            const token = await fetchResponse.json();
            console.log(token)
            return data;
        } catch (e) {
            console.error(e)
        }    
    }

    return <div> 
      <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={handleSubmit}>
              <div class="form-floating mb-3">
                <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
              <Button color="primary" type="submit">
                Sign In
              </Button>
              </div>
              <hr class="my-4"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  }
  
  export default Login