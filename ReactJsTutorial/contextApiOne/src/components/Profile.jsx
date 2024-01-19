import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return <div className="bg-green-100 px-2 py-2 m-8">Please Login</div>;

  return (
    <div className="bg-green-100 px-2 py-2 m-8">Welcome: {user.username}</div>
  );
}

export default Profile;
