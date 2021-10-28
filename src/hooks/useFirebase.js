import initializeAuthentication from "../components/Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // provider and auth
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   google sign in
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   logout

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser({});
      swal({
        title: "Successfuly logout",
        icon: "success",
      });
    });
  };

  //   observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  return {
    handleGoogleSignIn,
    handleLogout,
    user,
    setIsLoading,
    isLoading,
  };
};

export default useFirebase;
