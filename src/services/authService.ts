import httpClient from "../utils/httpClient";
import { LoginDataInterface } from "../interfaces/";


class AuthService {

    public async login({ offerupNick, password }: LoginDataInterface) {
        await httpClient.post('/auth/login', {
            offerupNick,
            password,
        })

    }

    public async checkSession() {
        return await httpClient.get('/auth/check-auth')
    }
}

export default new AuthService()