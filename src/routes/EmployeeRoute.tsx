import { Navigate, Outlet } from "react-router-dom"
import Layout from "../layouts/Layout"
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const EmployeeRoute = () => {
    const userSession = useSelector((state: RootState) => state.auth.userSession);



    if (userSession?.role === 'sales') {
        return (
            <Layout>
                <Outlet />
            </Layout>
        )
    } else if (userSession?.role === 'admin') {
        return <Navigate to={'/'} />
    }
    else {
        return <Navigate to='/login'/>;
    }
};

export default EmployeeRoute
