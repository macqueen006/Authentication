// libs/facades/AuthFacade.ts
import { AuthService } from "../services/AuthService";

export const AuthFacade = {
  login: async (email: string, password: string) => AuthService.login(email, password),
  logout: () => AuthService.logout(),
  isAuthenticated: () => AuthService.isAuthenticated(),
};
