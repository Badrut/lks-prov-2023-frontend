import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {

    const navigate = useNavigate();
    const [validation , setValidation] = useState([]);
    const [validator , setValidator] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
       const getValidation = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/validations?token=${token}`);
                setValidation(response.data.validation)
                setValidator(response.data.validation.validator)
                console.log(response.data.validation.validator)
            }

            catch (error)
            {
                console.log(error)
            }
       }

       getValidation();
    } , [token])

    return (
        <>
        <Navbar />
        <main>
            {/* Header */}
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Dashboard</h1>
                </div>
            </header>

            <div className="container">
                {/* Data Validation Section */}
                <section className="validation-section mb-5">
                    <div className="section-header mb-3">
                        <h4 className="section-title text-muted">My Data Validation</h4>
                    </div>
                    <div className="row">
                        {/* Request Data Validation */}
                        <div className="col-md-4">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h5 className="mb-0">Data Validation</h5>
                                </div>
                                <div className="card-body">
                                    <button
                                        onClick={() => navigate("/request-validation")}
                                        className="btn btn-primary btn-block"
                                    >
                                        + Request validation
                                    </button>
                                </div>
                            </div>
                        </div>
        
                        {/* Data Validation (Pending) */}
                        <div className="col-md-4">
                            <div className="card card-default">
                                <div className="card-header border-0">
                                    <h5 className="mb-0">Data Validation</h5>
                                </div>
                                <div className="card-body p-0">
                                    <table className="table table-striped mb-0">
                                        <tbody>
                                            <tr>
                                                <th>Status</th>
                                                <td>
                                                    <span className={`badge ${validation.status === "accepted" ? "badge-success" : "badge-info"}`}>{validation.status}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Job Position</th>
                                                <td className="text-muted">Web Developer</td>
                                            </tr>
                                            {validation.status === "accepted" && validator && (
                                                <tr>
                                                      <th>Validator</th>
                                                      <td className="text-muted">{validator}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Data Validation (Accepted) */}
                        {/* <div className="col-md-4">
                            <div className="card card-default">
                                <div className="card-header border-0">
                                    <h5 className="mb-0">Data Validation</h5>
                                </div>
                                <div className="card-body p-0">
                                    <table className="table table-striped mb-0">
                                        <tbody>
                                            <tr>
                                                <th>Status</th>
                                                <td>
                                                    <span className="badge badge-success">Accepted</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Job Position</th>
                                                <td className="text-muted">Programmer</td>
                                            </tr>
                                            <tr>
                                                <th>Validator</th>
                                                <td className="text-muted">Usman M.Ti</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* Job Applications Section */}
                <section className="validation-section mb-5">
                    <div className="section-header mb-3">
                        <div className="row">
                            <div className="col-md-8">
                                <h4 className="section-title text-muted">My Job Applications</h4>
                            </div>
                            <div className="col-md-4">
                                <button
                                    onClick={() => navigate("/add-job-application")}
                                    className="btn btn-primary btn-lg btn-block"
                                >
                                    + Add Job Applications
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="section-body">
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <div className="alert alert-warning">
                                    Your validation must be approved by a validator to apply for a job.
                                </div>
                            </div>

                            {/* Job Application Example */}
                            <div className="col-md-6">
                                <div className="card card-default">
                                    <div className="card-header border-0">
                                        <h5 className="mb-0">PT. Maju Mundur Sejahtera</h5>
                                    </div>
                                    <div className="card-body p-0">
                                        <table className="table table-striped mb-0">
                                            <tbody>
                                                <tr>
                                                    <th>Address</th>
                                                    <td className="text-muted">
                                                        Jln. HOS. Cokroaminoto No. 900, DKI Jakarta
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Position</th>
                                                    <td className="text-muted">
                                                        <ul>
                                                            <li>
                                                                Desain Grafis{" "}
                                                                <span className="badge badge-info">Pending</span>
                                                            </li>
                                                            <li>
                                                                Programmer{" "}
                                                                <span className="badge badge-danger">Rejected</span>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="text-center py-4 text-muted">
                        Copyright &copy; 2023 - Web Tech ID
                    </div>
                </div>
            </footer>
        </main>
        
        </>
    )

}

export default Dashboard;