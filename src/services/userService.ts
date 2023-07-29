import { ICallReqQuery, IInquiry, IUser } from "../interfaces";
import httpClient from "../utils/httpClient";
// import { LoginDataInterface } from "../interfaces/";

// 'https://api.ornateadmin.com/api/v1/users/all?q=&page=1'
class UserService {

    public async getUsers() {
        return await httpClient.get('/users/all')

    }
   
    //get all inquiries
  getAllInquiries(query:IInquiry, page:number) {
    return httpClient.get(`/inquiries?offerupNick=${query.offerupNick}&firstName=${query.firstName}&customerName=${query.customerName}&productName=${query.productName}&page=${page}`);
  }

  //update inquiry
  updateInquiry(payload:IInquiry) {
    return httpClient.patch(`/api/v1/inquiry/${payload.id}`, payload);
  }
  //gel all call requests
  getAllCallReqs(query:{offerupNick:string,firstName:string,customerName:string}, page:number) {
    return httpClient.get(`/api/v1/calls?offerupNick=${query.offerupNick}&firstName=${query.firstName}&customerName=${query.customerName}&page=${page}`);
  }
  //get all users
  getAllUsers(query:string, page:number) {
    return httpClient.get(`/api/v1/users/all?q=${query}&page=${page}`);
  }
  //get all sales for admin
  getAllSales(page:number) {
    return httpClient.get(`/api/v1/sales?page=${page}`);
  }
//   createSales(payload) {
//     return httpClient.post(`/api/v1/sales`, payload);
//   }

//   getCommissions(payload) {
//     return httpClient.post(`/api/v1/commission`, payload);
//   }
//   createInvoice(payload) {
//     return httpClient.post(`/api/v1/invoice`, payload);

//   }
  creatUser(payload:IUser) {

    return httpClient.post(`/api/v1/auth/register`, payload);

  }
  getCallReqById(id:string) {
    return httpClient.get(`/api/v1/calls/call/${id}`);

  }
  getUser(id:string) {
    return httpClient.get(`/api/v1/users/${id}`);
  }
  editUser(id:string, payload:IUser) {
    return httpClient.put(`/api/v1/users/${id}`, payload);
  }


  //-------------------USER----------------------//
  // create call request
  createCallReq(payload:ICallReqQuery) {
    return httpClient.post(`/api/v1/calls`, payload);
  }
  //update call request
  updateCallReq(id:number,payload:ICallReqQuery) {
        return httpClient.put(`calls/${id}`,payload)
  }
  // get user's inquiries
  getUserInquiries() {
    return httpClient.get(`/api/v1/my-inquiries`);
  }

  // add user's inquiry
  createInquiry(payload:IInquiry) {
    return httpClient.post(`/api/v1/inquiries`, payload);
  }

//   getSalesNotice(query, page) {
//     return httpClient.get(`/api/v1/sales/uiSales?q=${query}&page=${page}`);
//   }
//   getMySales(query, page) {
//     return httpClient.get(`/api/v1/sales/?q=${query}&page=${page}`);
//   }
}

export default new UserService()