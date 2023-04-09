import * as crypto from "crypto";

class PasswordManager {
  static generateHash(password: string): string {
    return crypto.createHash("sha512").update(password).digest("base64");
  }

  static passwordsMatch(password: string, hash: string): boolean {
    return PasswordManager.generateHash(password) === hash;
  }
}

export { PasswordManager };
