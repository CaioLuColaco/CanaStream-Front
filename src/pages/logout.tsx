import { SessionManager } from "@/utils/session-manager";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    SessionManager.logout();
  }, []);
}
