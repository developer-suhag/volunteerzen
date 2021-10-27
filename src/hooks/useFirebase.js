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
  const [user, setUser] = useState();

  // provider and auth
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   google sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        swal({
          title: "Login Success",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          title: `${error.message}`,
          icon: "error",
        });
      });
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
      }
    });
    return unsubscribe;
  }, [auth]);

  return {
    handleGoogleSignIn,
    handleLogout,
    user,
  };
};

export default useFirebase;
