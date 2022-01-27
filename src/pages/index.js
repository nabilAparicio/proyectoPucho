import React, {useState} from "react";
import { 
  Button,
  Input,
} from "reactstrap";
import { login } from "../network/ApiAxios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const tryLogin = async () => {
        const response = await login(email, password);
        const {data} = response;
        if (data.token) {
            setError("");
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            console.log(data)
            
        } else {
            setPassword("");
            setError(data.msg);
        }
    }

      return <div> 
        <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              <form>
                <div class="form-floating mb-3">
                  <input name="email" onChange={e => setEmail(e.target.value)}type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <Input name="password" type="password" onChange={e => setPassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div class="d-grid">
                <Button color="primary" type="button" onClick={tryLogin}>
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
  export default Login;