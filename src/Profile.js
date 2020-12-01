import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return (
    <div>
      see Id is working <strong>{id}</strong>
    </div>
  );
};

export default Profile;
