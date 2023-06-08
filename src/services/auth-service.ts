import { api } from "@/pages/api/axios";
import { SignInDTO } from "@/types/api/auth.dto";
import { User } from "@/types/user";

export class AuthService {
  static async signIn(data: SignInDTO): Promise<any> {
    try {
      const res = await api.post("/auth/login", data);
      return res.data.token;
    } catch (e) {
      return false;
    }
  }

  static async signOut(): Promise<void> {
    return api.post("/auth/logout");
  }

  static async getLoggedUser(id: number): Promise<User> {
    return api.get("auth/userme/" + id);
  }
}
