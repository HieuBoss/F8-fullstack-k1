import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../logout/Logout";
import EmailForm from "../form/EmailForm";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div
        className="text-center shadow py-5 "
        style={{ width: "500px", margin: "0 auto" }}
      >
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <EmailForm />
        <Logout />
      </div>
    )
  );
}
