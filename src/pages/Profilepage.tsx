import Profile from "../components/Profile";
import { useParams } from "react-router-dom";

const UserProfilePage = () => {
  const id = useParams();

  return <Profile userId={id} />;
};

export default UserProfilePage;
