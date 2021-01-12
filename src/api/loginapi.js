import { Auth } from "aws-amplify";

// User Login
// const login = async data => {
//     try {
//         await Auth.signIn(data.email, data.password);
//         return 'login success';
//     } catch (e) {
//         return e.message;
//     }
// };

// // User logout
// const logout = async () => await Auth.signOut();

// // Get a user session
// const session = async () => {
//     try {
//         if (await Auth.currentSession()) {
//             return true;
//         }
//     } catch(e) {
//         return false;
//     }
// }

// // User Sign up
// const signup = async data => {
//     try {
//         await Auth.signUp({ username:data.email, password: data.password });
//         return 'signup success';
//     } catch (e) {
//         return e.message;
//     }
// };

// /*
//  Confirm User Sign up
//  */
// const confirmSignup = async data => {
//     try {
//         await Auth.confirmSignUp( data.email, data.confirmationCode );
//         await Auth.signIn( data.email, data.password );
//         return 'confirm success';
//     } catch (e) {
//         return !e.message ? 'The code you provided is incorrect!' : e.message;
//     }
// };

// /**
//  * Get current authenticated user details
//  */
// const currentUserInfo = async () => { 
//     try {
//       var user = await Auth.currentAuthenticatedUser();
//       return user.attributes.email;
//     } catch(e){
//       return e;
//     }
    
// }

// export default { login, logout, session, signup, confirmSignup, currentUserInfo };


// import { Auth } from "aws-amplify";

// const performSignUp = async (data) => {
//       try {
//         const { user } = await Auth.signUp({
//           username: data.name,
//           password: data.password,
//           attributes: {email:data.name, phone_number: data.phoneNumber, name: data.goodname },
//         });
//         console.log(user);
//       } catch (error) {
//         console.log(error);
//         //throw new Error(error)
//       }
//     };
//     console.log(Auth.currentAuthenticatedUser())
    
//       const confirmSignUp = async (data) => {
//         try {
//           await Auth.confirmSignUp(data.email,data.Verification_code);
//           history.push("/")
        
//         } catch (error) {
//             console.log('error confirming sign up', error);
//         }
//     }
  
//     const signIn = async (data) => {
//       try {
//         console.log("aaaaa",data)
//         const user = await Auth.signIn(data.username, data.password).then(
//          history.push("/")
//         );
//     } catch (error) {
//         console.log('error signing in', error);
//     }
//     }
  
//       const resendConfirmationCode = async (data) => {
//         try {
//             await Auth.resendSignUp(username);
//             console.log('code resent successfully');
//         } catch (err) {
//             console.log('error resending code: ', err);
//         }
//     }
  
//       const signOut = async (data) => {
//         try {
//             await Auth.signOut();
//         } catch (error) {
//             console.log('error signing out: ', error);
//         }
//     }
  
//       const globalSignOut = async (data) => {
//         try {
//           await Auth.signOut({ global: true });
//       } catch (error) {
//           console.log('error signing out: ', error);
//       }
//     }

