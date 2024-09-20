import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // Initialize with navigator.onLine

  useEffect(() => {
    const handleOffline = () => setOnlineStatus(false);
    const handleOnline = () => setOnlineStatus(true);

    window.addEventListener("offline", handleOffline); // Correct casing for "offline"
    window.addEventListener("online", handleOnline); // Correct casing for "online"

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  console.log("Online status:", onlineStatus); // Log the current status

  return onlineStatus;
};

export default useOnlineStatus;
