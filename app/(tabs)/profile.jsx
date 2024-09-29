import { SafeAreaView } from "react-native-safe-area-context";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../../components/dashboard/dashboard";
import { useEffect, useState } from "react";
import { getUser } from "../(auth)/apiAuth";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        setUser(response);
      } catch (error) {
        console.log("Errorrrr", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <ProtectedRoute>
      <SafeAreaView className="bg-bgColor min-h-full p-4 justify-center">
        <Dashboard userId={user?.user?.id} />
      </SafeAreaView>
    </ProtectedRoute>
  );
};

export default Profile;
