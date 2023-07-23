import React, { useState } from 'react';
import Logo from '../assets/ornate-logo.avif';
import { useDispatch } from 'react-redux';
import { setSession } from '../features/authSlice';
import { AppDispatch } from '../store';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';


const LoginForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [offerupNick, setOfferupNick] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await authService.login({ offerupNick, password })
        const res = await authService.checkSession()
        dispatch(setSession(res.data.data));

        if (!res.data.data) {
            navigate('/login')
        }
        else if (res.data.data.role === 'admin') {
            navigate('/inquiries')
        }
        else {
            navigate('/create-inquiry')
        }
    };

    return (
        <div className="w-full h-screen md:h-auto md:w-auto flex flex-col bg-primaryColor p-5 md:rounded-xl rounded-none absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            < img src={Logo} />
            <form
                className="max-w-md w-full  shadow-md rounded-md px-8 py-6"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
                <div className="mb-4">
                    <label htmlFor="offerupNick" className="block text-sm mb-1 text-white">
                        Offerup Nick
                    </label>
                    <input
                        type="text"
                        id="offerupNick"
                        className="w-full p-2 border border-white rounded"
                        value={offerupNick}
                        onChange={(e) => setOfferupNick(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm mb-1 text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border border-white rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-secondaryColor text-white font-semibold rounded"
                >
                    Sign In
                </button>
            </form>
        </div >
    );
};

export default LoginForm;
