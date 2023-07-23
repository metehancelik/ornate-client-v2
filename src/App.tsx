import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import Login from './pages/Login'
import AllUsers from './pages/users/AllUsers'
import EmployeeRoute from './routes/EmployeeRoute'
import CreateUser from './pages/users/CreateUser'
import AllInquiries from './pages/inquiries/AllInquiries'
import CreateInquiry from './pages/inquiries/CreateInquiry'
import AllCallRequest from './pages/callRequests/AllCallRequest'
import AllSales from './pages/sales/AllSales'
import CreateSale from './pages/sales/CreateSale'
import EditSale from './pages/sales/EditSale'
import Invoices from './pages/invoice/Invoices'
import CreateCallRequest from './pages/callRequests/CreateCallRequest'
import EditCallRequest from './pages/callRequests/EditCallRequest'
import EditInquiry from './pages/inquiries/EditInquiry'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store'
import { checkSession } from './features/authSlice'


function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkSession());
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<PrivateRoute />} >
        <Route path='/dashboard' element={<AllUsers />} />
        <Route path='/users' element={<AllUsers />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/inquiries' element={<AllInquiries />} />
        <Route path='/call-requests' element={<AllCallRequest />} />
        <Route path='/sales' element={<AllSales />} />
        <Route path='/create-sale' element={<CreateSale />} />
        <Route path='/edit-sale' element={<EditSale />} />
        <Route path='/invoices' element={<Invoices />} />
        <Route index element={<Navigate to='/inquiries' />} />
      </Route>
      <Route element={<EmployeeRoute />}>
        <Route path='/create-inquiry' index element={<CreateInquiry />} />
        <Route path='/my-inquiries' index element={<CreateInquiry />} />
        <Route path='/create-call-request' element={<CreateCallRequest />} />
        <Route path='/my-call-requests' element={<CreateCallRequest />} />
        <Route path='/my-sales' element={<AllSales />} />
        <Route path='/sale-notice' element={<AllSales />} />
        <Route path='/edit-call-request' element={<EditCallRequest />} />
        <Route path='/edit-inquiry' element={<EditInquiry />} />
      </Route>
    </Routes>
  )
}

export default App
