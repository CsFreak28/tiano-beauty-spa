import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  function checkIfUserIsAuthenticated(): boolean {
    let aUserIsLoggedIn: string | null = sessionStorage.getItem("uid");
    if (aUserIsLoggedIn !== null) {
      console.log(aUserIsLoggedIn);
      console.log("a user has logged in");
      return true;
    }
    console.log("no user has logged in");
    return false;
  }
  return checkIfUserIsAuthenticated() ? (
    <Outlet context={checkIfUserIsAuthenticated} />
  ) : (
    <Navigate to={"/auth/signIn"} />
  );
};
export default ProtectedRoutes;
