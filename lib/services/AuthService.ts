export const AuthService = {
    async login(email: string, password: string): Promise<string> {
        // Mock implementation of login logic
        console.log(email, password);
        
      return new Promise((resolve) => setTimeout(() => resolve("mock-token"), 1000));
    },
  
    logout(): void {
      console.log("Logged out");
    },
  
    isAuthenticated(): boolean {
      return !!localStorage.getItem("token");
    },
  };
  