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
    return !!localStorage.getItem("token");
  }
}

export { SessionManager };
