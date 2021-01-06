import React ,{useState}from "react";
import { useForm } from "react-hook-form";

import { Link,  useHistory} from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../common/breadcrumb";
import { Modal, Button } from "react-bootstrap";

import { Auth } from "aws-amplify";

function Login() {
<<<<<<< HEAD
  let history = useHistory();
  let dataObj;
  console.log(dataObj)
  const { register, handleSubmit } = useForm();
  const { register:registerLogin, handleSubmit:handleSubmitLogin } = useForm();
 
  const { register:registercode, handleSubmit:handleSubmitcode } = useForm();
  const onSubmitcode = (data) => {
    console.log(data)
  };

  const performSignUp = async (data) => {
    try {
      const { user } = await Auth.signUp({
        username: data.name,
        password: data.password,
        attributes: {email:data.name, phone_number: data.phoneNumber, name: data.goodname },
      });
      console.log(user);
    } catch (error) {
      console.log(error);
      //throw new Error(error)
=======
    
    let dataObj;  
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
        dataObj = data
    };
  
    const performSignUp = async (data) => {
      try{ 
          const { user } = await Auth.signUp({username:data.name,password:data.password,attributes:{email:data.name,phone_number:data.phoneNumber,name:data.goodname}});
          console.log(user)   
        }
        catch(error){ 
          console.log(error)
          //throw new Error(error)
        }
>>>>>>> 2f93e898338789c014bcdc8c26267c500a084953
    }
  };
  
    const confirmSignUp = async (data) => {
      try {
        await Auth.confirmSignUp(data.email,data.Verification_code);
        history.push("/")
      
      } catch (error) {
          console.log('error confirming sign up', error);
      }
  }

<<<<<<< HEAD
  const signIn = async (data) => {
    try {
      console.log("aaaaa",data)
      const user = await Auth.signIn(data.username, data.password).then(
       history.push("/")
      );
  } catch (error) {
      console.log('error signing in', error);
  }
  }

=======
  //   const confirmSignUp = async (data) => {
  //     try {
  //       await Auth.confirmSignUp(username, code);
  //     } catch (error) {
  //         console.log('error confirming sign up', error);
  //     }
  // }
  
    // const signIn = async (data) => {
    //   try {
    //     const user = await Auth.signIn(username, password);
    // } catch (error) {
    //     console.log('error signing in', error);
    // }
    // }
  
>>>>>>> 2f93e898338789c014bcdc8c26267c500a084953
  //   const resendConfirmationCode = async (data) => {
  //     try {
  //         await Auth.resendSignUp(username);
  //         console.log('code resent successfully');
  //     } catch (err) {
  //         console.log('error resending code: ', err);
  //     }
  // }

  //   const signOut = async (data) => {
  //     try {
  //         await Auth.signOut();
  //     } catch (error) {
  //         console.log('error signing out: ', error);
  //     }
  // }

  //   const globalSignOut = async (data) => {
  //     try {
  //       await Auth.signOut({ global: true });
  //   } catch (error) {
  //       console.log('error signing out: ', error);
  //   }
  // }
  const [isOpen,setIsOpen] = useState(false);
  const openModal = () =>  setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Helmet>
        <title>Porto React Ecommerce - Login Page </title>
      </Helmet>

      <h1 className="d-none">Porto React Ecommerce - Login Page</h1>

      <div className="main">
        <div
          className="page-header page-header-bg"
          style={{
            background: `#EDEFEC no-repeat 60%/cover url('${process.env.PUBLIC_URL}/assets/images/demo/page-header-bg.jpg')`,
          }}
        >
          <div className="container">
            <h1 className="mb-0">Login</h1>
          </div>
        </div>
        <Breadcrumb current="Login" />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="heading">
                <h2 className="title">Login</h2>
                <p>If you have an account with us, please log in.</p>
              </div>

              <form onSubmit={handleSubmitLogin(signIn)}>
                
                <input
                  type="email"
                  name="username"
                  className="form-control"
                  placeholder="Email"
                  ref={registerLogin}
                  required
                />
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  ref={registerLogin}
                  required
                />

                <div className="form-footer">
                  <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/password`}
                    className="forget-pass"
                  >
                    {" "}
                    Forgot your password?
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <div className="heading">
                <h2 className="title">Create An Account</h2>
                <p>
                  By creating an account with our store, you will be able to
                  visit.
                </p>
              </div>

              <form onSubmit={handleSubmit(performSignUp)}>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Email"
                  ref={register}
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="phone number"
                  ref={register}
                  required
                />
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  ref={register}
                  required
                />
                <input
                  type="text"
                  name="goodname"
                  className="form-control"
                  placeholder="Name"
                  ref={register}
                  required
                />
                <div className="form-footer">
                  <button onClick={openModal} type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                  <Modal show={isOpen} onHide={closeModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Enter The code Sent to your Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                  <form onSubmit={handleSubmitcode(confirmSignUp)}>
                  <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Confirm Email"
                  ref={registercode}
                  required
                />
                   
                    <input
                  type="text"
                  name="Verification_code"
                  className="form-control"
                  placeholder="Verification Code"
                  ref={registercode}
                  required
                />
                </form >
                    </Modal.Body>
                    <Modal.Footer>
                      <Button type="submit"  onClick = {handleSubmitcode(confirmSignUp)}  variant="secondary">Submit</Button>
                      <Button onClick={closeModal} variant="secondary">close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mb-5"></div>
      </div>
    </>
  );
}

export default Login;
