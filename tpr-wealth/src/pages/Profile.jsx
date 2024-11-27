import { useLocation } from "react-router-dom";
const ProfilePage = ({user,setUser}) => {
    const location =useLocation()
    const user1=location.state?.user
    setUser(user1?.name || "Guest")
    return (
        <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Welcome to Your Profile {user || "Guest"}</h1>
        <h4 className="text-3xl pt-16">To know more about your investments or any queries go to contact page our team will contact you  </h4>
      </div>
      <h3 className="flex flex-col items-center justify-center  pb-4 bg-gray-900 text-white text-3xl font-bold">Go to Contact page for more Details  </h3>
      </>
    );
  };
  
  export default ProfilePage;
  