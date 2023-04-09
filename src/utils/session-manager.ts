import jwt from "jsonwebtoken";

class SessionManager {
  static generateToken(username: string): string {
    const token = jwt.sign({ username }, "asdf");
    console.log({ jwt, token });
    return token;
  }

  static setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  static hasToken(): boolean {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return !!token;
    }
    return false;
  }
}

export { SessionManager };
