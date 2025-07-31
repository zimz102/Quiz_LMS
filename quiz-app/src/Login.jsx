// Login.jsx
import React, { useState } from 'react';

const validUsers = [
    { username: "lap", password: "lap123" },
    { username: "test", password: "test123" },
];

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const matched = validUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (matched) {
            localStorage.setItem('user', username);        // lưu vào localStorage
            onLogin(username);                             // gọi để cập nhật trạng thái
        } else {
            setError('Sai tài khoản hoặc mật khẩu');
        }
    };

    

    return (
        <div className="min-h-screen grid place-items-center bg-gray-200 w-screen">
            <div className="max-w-md w-full p-6 bg-white shadow rounded">
                <h1 className="text-2xl font-bold text-center text-[#39BBF5] mb-8">Quiz App</h1>
                <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Tài khoản"
                        className="w-full border rounded px-3 py-2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        className="w-full border rounded px-3 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    );
}
