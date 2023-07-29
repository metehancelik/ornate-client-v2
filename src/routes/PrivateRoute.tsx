import { Navigate, Outlet } from "react-router-dom"
import Layout from "../layouts/Layout"
import { useSelector } from "react-redux";
import { RootState } from "../store";

const PrivateRoute = () => {
    const { userSession, loading } = useSelector((state: RootState) => state.auth);

    if (loading) {
        return <div>Loading</div>
    }
    if (!loading && userSession?.role === 'admin') {
        return (
            <Layout>
                <Outlet />
            </Layout>
        )
    }
    if (userSession?.role === 'sales' || !userSession) {
        return <Navigate to='/login' replace />;
    }
    return <Navigate to='/' replace />;

}

export default PrivateRoute