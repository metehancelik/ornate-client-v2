import httpClient from "../utils/httpClient";
// import { LoginDataInterface } from "../interfaces/";

// 'https://api.ornateadmin.com/api/v1/users/all?q=&page=1'
class UserService {

    public async getUsers() {
        return await httpClient.get('/users/all')

    }
}

export default new UserService()