import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../configs/firebase.config";

const auth = getAuth(app)

export function useAuth() {
  const [user, setUser] = React.useState<any>();

  console.log("user", user)

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
    setUser
  };
}