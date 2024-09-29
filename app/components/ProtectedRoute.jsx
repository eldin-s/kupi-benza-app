// components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { supabase } from "../../lib/supabase";

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    checkSession();

    // Listen to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup the subscription when component unmounts
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    // If no session and not loading, redirect to login
    if (!session && !loading) {
      router.replace("/(auth)/log-in");
    }
  }, [session, loading]);

  // Show loading spinner while checking session
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Render children only if the user is authenticated
  return session ? children : null;
};

export default ProtectedRoute;
