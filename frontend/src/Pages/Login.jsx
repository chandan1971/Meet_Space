import React from "react";

const Login = () => {
    return (
    
        <div className="flex justify-center items-center h-screen">
            <div><h2 className="text-2xl font-semibold mb-4 ">Login Page</h2>
            <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <input 
                    className="block mb-4 px-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" 
                    type="email" 
                    placeholder="Enter email id"
                />
                <input 
                    className="block mb-4 px-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" 
                    type="password" 
                    placeholder="Enter Password"
                />
                <button 
                    className="block bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Login
                </button>
            </div>
            </div>
        </div>
        // <div className="login-container">
        //     <div>
        //         <input type="email" placeholder="Enter email id"/>
        //         <input type="text" placeholder="Enter Password"/>
        //         <button>Login</button>
        //     </div>
        // </div>
    )
};

export default Login;