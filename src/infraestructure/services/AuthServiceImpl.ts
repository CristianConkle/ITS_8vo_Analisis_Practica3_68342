import { User } from "../../core/domain/User";
import { AuthService } from "../../core/ports/AuthService";

export class AuthServiceImpl implements AuthService {
    async login(email: string, password: string): Promise<User | null> {
        try {
          const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
      
          const rawData = await response.text();
          console.log("📦 Raw response (login):", rawData);
      
          if (!response.ok) {
            console.error("❌ Login failed:", rawData);
            return null;
          }
      
          const data = JSON.parse(rawData);
          const userData = data.data;
          const token = data.token;
      
          return {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            token: token,
          };
        } catch (error) {
          console.error("❌ Error in login:", error);
          return null;
        }
      }
      

  async register(name: string, email: string, password: string): Promise<User | null> {
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const rawData = await response.text(); // Capturamos el texto crudo
      console.log("📦 Raw response:", rawData);

      if (!response.ok) {
        console.error("❌ Registration failed:", rawData);
        return null;
      }

      const data = JSON.parse(rawData);
      console.log("✅ Parsed response:", data);

      const userData = data.data; // Verifica en consola si esto existe
      const token = data.token;

      return {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        token,
      };
    } catch (error) {
      console.error("❌ Error in register:", error);
      return null;
    }
  }

  async logout(): Promise<void> {
    // Puedes limpiar el token o hacer una llamada al backend si deseas
    localStorage.removeItem("token");
  }
}
