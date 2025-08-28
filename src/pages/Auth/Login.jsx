import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Username or Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <p className="text-red-500 text-sm">Invalid username or password.</p>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <button className="mt-4 text-blue-500 text-sm">
                    Forgot Password?
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
