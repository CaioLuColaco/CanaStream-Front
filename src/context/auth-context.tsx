import { AuthService } from "@/services/auth-service";
import { SignInDTO } from "@/types/api/auth.dto";
import { User } from "@/types/user";
import jwtDecode from "jwt-decode";
import Router from "next/router";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (data: any) => Promise<any>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth(): AuthContextType {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!user;

  useEffect(() => {
    try {
      const { "auth.token": token } = parseCookies();
      if (token) {
        const loggedUser: User = jwtDecode(token);
        AuthService.getLoggedUser(loggedUser.id).then((res) => setUser(res));
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, []);

  async function signIn({ email, password }: SignInDTO) {
    const token = await AuthService.signIn({ email, password });

    if (token) {
      const user: User = jwtDecode(token);
      setCookie(undefined, "auth.token", token);
      setUser(user);
      Router.push("/");
    }
  }

  async function signOut(): Promise<void> {
    destroyCookie(undefined, "auth.token");
    Router.push("/login");
    window.location.reload();
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
}
