import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../common/breadcrumb';
import { Auth } from 'aws-amplify';


function Login() {
    
    let dataObj;  
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
        dataObj = data
    };
  
    const performSignUp = async (data) => {
      try{ 
          const { user } = await Auth.signUp({username:data.name,password:data.password,attributes:{phone_number:data.phoneNumber,name:data.goodname}});
          console.log(user)   
        }
        catch(error){ 
          console.log(error)
          //throw new Error(error)
        }
    }


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
  
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="User Name"
                    ref={register}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    ref={register}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    ref={register}
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
                    placeholder="Name"
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
                    placeholder="goodname"
                    ref={register}
                    required
                  />
                  <div className="form-footer">
                    <button type="submit" className="btn btn-primary">
                      Create Account
                    </button>
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