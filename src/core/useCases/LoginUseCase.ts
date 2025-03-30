import {User} from "../domain/User";
import {AuthService} from "../ports/AuthService";

export class LoginUseCase {
    constructor(private authService: AuthService) {}

    async login(email: string, password: string): Promise<User | null> {
        return await this.authService.login(email, password);
    }
}