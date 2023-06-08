import { AuthService } from "@/services/auth-service";
import { SignInDTO } from "@/types/api/auth.dto";
import { User } from "@/types/user";
import jwtDecode from "jwt-decode";
import Router from "next/router";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "auth.token": token } = parseCookies();
    if (token) {
      const loggedUser: User = jwtDecode(token);
      AuthService.getLoggedUser(loggedUser.id).then((res) => setUser(res));
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
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
