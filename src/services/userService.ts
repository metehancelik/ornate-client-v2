import httpClient from "../utils/httpClient";
// import { LoginDataInterface } from "../interfaces/";

// 'https://api.ornateadmin.com/api/v1/users/all?q=&page=1'
class UserService {

    public async getUsers() {
        return await httpClient.get('/users/all')

    }
    //get all inquiries
  getAllInquiries(query, page) {
    return this.request.get(`${API_URL}/api/v1/inquiries?offerupNick=${query.offerupNick}&firstName=${query.firstName}&customerName=${query.customerName}&productName=${query.productName}&page=${page}`);
  }

  //update inquiry
  updateInquiry(payload) {
    return this.request.patch(`${API_URL}/api/v1/inquiry/${payload.id}`, payload);
  }
  //gel all call requests
  getAllCallReqs(query, page) {
    return this.request.get(`${API_URL}/api/v1/calls?offerupNick=${query.offerupNick}&firstName=${query.firstName}&customerName=${query.customerName}&page=${page}`);
  }
  //get all users
  getAllUsers(query, page) {
    return this.request.get(`${API_URL}/api/v1/users/all?q=${query}&page=${page}`);
  }
  //get all sales for admin
  getAllSales(page) {
    return this.request.get(`${API_URL}/api/v1/sales?page=${page}`);
  }
  createSales(payload) {
    return this.request.post(`${API_URL}/api/v1/sales`, payload);
  }

  getCommissions(payload) {
    return this.request.post(`${API_URL}/api/v1/commission`, payload);
  }
  createInvoice(payload) {
    return this.request.post(`${API_URL}/api/v1/invoice`, payload);

  }
  creatUser(payload) {

    return this.request.post(`${API_URL}/api/v1/auth/register`, payload);

  }
  getCallReqById(id) {
    return this.request.get(`${API_URL}/api/v1/calls/call/${id}`);

  }
  getUser(id) {
    return this.request.get(`${API_URL}/api/v1/users/${id}`);
  }
  editUser(id, payload) {
    return this.request.put(`${API_URL}/api/v1/users/${id}`, payload);
  }


  //-------------------USER----------------------//
  // create call request
  createCallReq(payload) {
    return this.request.post(`${API_URL}/api/v1/calls`, payload);
  }
  //update call request
  updateCallReq(payload) {

  }
  // get user's inquiries
  getUserInquiries() {
    return this.request.get(`${API_URL}/api/v1/my-inquiries`);
  }

  // add user's inquiry
  createInquiry(payload) {
    return this.request.post(`${API_URL}/api/v1/inquiries`, payload);
  }

  getSalesNotice(query, page) {
    return this.request.get(`${API_URL}/api/v1/sales/uiSales?q=${query}&page=${page}`);
  }
  getMySales(query, page) {
    return this.request.get(`${API_URL}/api/v1/sales/?q=${query}&page=${page}`);
  }
}

export default new UserService()