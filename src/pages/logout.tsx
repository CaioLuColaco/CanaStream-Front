import { SessionManager } from "@/utils/session-manager";

export default function Logout() {
  return SessionManager.logout();
}
