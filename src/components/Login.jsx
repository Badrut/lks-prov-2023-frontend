import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [idcard, setIdCard] = useState("");
    const [password, setPassword] = useState("");
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if(token)
        {
            navigate('/dashboard');
        }
    })

    const handleLogin = async (e) => {
        e.preventDefault(); // Mencegah reload halaman

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/v1/auth/login", {
                id_card_number : idcard,
                password : password,
            });

            localStorage.setItem("token", response.data.body.token);
            console.log("Login berhasil");
        } catch (error) {
            console.error("Login gagal", error);
        }
    };

    return (
        <>
            <Navbar />

            <main>
                <header className="jumbotron">
                    <div className="container text-center">
                        <h1 className="display-4">Job Seekers Platform</h1>
                    </div>
                </header>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form className="card card-default" onSubmit={handleLogin}>
                                <div className="card-header">
                                    <h4 className="mb-0">Login</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group row align-items-center">
                                        <div className="col-4 text-right">ID Card Number</div>
                                        <div className="col-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="idcard"
                                                value={idcard}
                                                onChange={(e) => setIdCard(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                        <div className="col-4 text-right">Password</div>
                                        <div className="col-8">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row align-items-center mt-4">
                                        <div className="col-4"></div>
                                        <div className="col-8">
                                            <button className="btn btn-primary" type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="container">
                    <div className="text-center py-4 text-muted">
                        Copyright &copy; 2023 - Web Tech ID
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Login;
