import { AuthService } from "../ports/AuthService";
import { User } from "../domain/User";

export class RegisterUseCase {
    constructor(private authService: AuthService) {}
  
    async register(name: string, email: string, password: string): Promise<User | null> {
      return await this.authService.register(name, email, password);
    }
  }
  