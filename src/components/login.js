import React, {useState} from "react";
import { useRouter } from 'next/router'
import { 
  Button,
  Input,
  Form,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  InputGroup,
  InputGroupText,
  CardSubtitle,
  Col,
  Row,
  Label,
} from "reactstrap";
import { login } from "../network/ApiAxios";

function Login() {
    const router = useRouter()

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
            router.push('/dashboard')
            
        } else {
            setPassword("");
            setError(data.msg);
        }
    }

  return (
    <>
        <div className="container">
          <Col sm="4" md="4" className="position-absolute top-50 start-50 translate-middle"  >
            <Card color="light" className="shadow">
              <CardBody>
                <CardTitle tag="h2" className="text-center">
                  Sign in
                </CardTitle>
                <Form role="form">
                  <CardSubtitle> 
                    Email 
                  </CardSubtitle>
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-email-83"/>
                        </InputGroupText>
                      <Input placeholder="example@email.com" type="email" autoComplete="email" value={email}
                              onChange={e => setEmail(e.target.value)}/>
                    </InputGroup>
                  </FormGroup>
                  <CardSubtitle> 
                    Password 
                  </CardSubtitle>
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      <Input placeholder="Password" type="password" autoComplete="password" value={password}
                              onChange={e => setPassword(e.target.value)}/>
                    </InputGroup>
                  </FormGroup>
                  <div className="form-check">
                    <Input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    <Label className="form-check-label text-muted" for="flexCheckIndeterminate">
                      Remember me
                    </Label>
                  </div>
                  {/* {error ?
                    <div className="text-muted font-italic">
                        <small>
                          error:{"algo pusiste mal"}
                          <span className="text-red font-weight-700">{error}</span>
                      </small>
                    </div> : null } */}
                  <div className="text-center">
                     <Button className="my-4" color="primary" type="button" onClick={tryLogin}>
                       Sign in
                     </Button>
                  </div>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a className="text-secondary" role="button" onClick={() =>router.push('/dashboard')}>
                        <small>Forgot Password</small>
                      </a>
                    </Col>
                    <Col className="text-end" xs="6">
                      <a className="text-secondary " role="button" onClick={() => router.push('/dashboard')}>
                        <small>Create new Acount</small>
                      </a>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </div>
    </>
  );
} 
  export default Login;