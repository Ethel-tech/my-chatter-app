import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile
  } from "firebase/auth";
  import { auth } from "./Firebase";
  import { applyActionCode } from "firebase/auth";
  
  export const registerUser = async (
    displayName: string,
    email: string,
    password: string
  ) => {
    if (!email && !password) return;
  
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  
    if (userCredential && auth.currentUser) {
      try {
        sendEmailVerification(auth.currentUser);
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: "https://robohash.org/2?set=set2"
        });
      } catch (error) {
        console.log(error);
      }
    }
  
    return userCredential;
  };
  
  export const confirmUserEmail = async (oobCode: string) => {
    if (!oobCode) return;
  
    try {
      await applyActionCode(auth, oobCode).then(() =>
        alert("Your email has been verified!")
      );
    } catch (error) {
        if (error instanceof Error){
            alert(error.message);
        } else {
            console.log('Unexpected error', error);
          }
      
    }
  
    return;
  };
  