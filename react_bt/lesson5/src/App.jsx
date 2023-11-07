import React from "react";
import Profile from "./components/profile/Profile";
import Welcome from "./components/Welcome";
import { useAuth0 } from "@auth0/auth0-react";
export default function App() {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated ? <Profile /> : <Welcome />}</div>;
}
