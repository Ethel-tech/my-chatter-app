import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  connectAuthEmulator,
    sendPasswordResetEmail,
    confirmPasswordReset
} from "firebase/auth";
import { getFirebaseConfig } from "./FirebaseConfig";

const app = initializeApp(getFirebaseConfig());
export const auth = getAuth(app);

export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);


if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, "http://localhost:9099");
}

export const passwordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email)
}

export const confirmThePasswordReset = async (
  oobCode:string, newPassword:string
) => {
  if(!oobCode && !newPassword) return;
  
  return await confirmPasswordReset(auth, oobCode, newPassword)
}
