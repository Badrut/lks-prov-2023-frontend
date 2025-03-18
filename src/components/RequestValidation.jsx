import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Request = () => {
    const [jobCategory , setJobCategory] = useState("");
    const [jobPosition , setJobPosition] = useState("");
    const [workExperience , setWorkExperience] = useState("");
    const [reasonAccepted , setReasonAccepted] = useState("");
    const [message, setMessage] = useState("");
    
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            setMessage("Token tidak ditemukan!");
            return;
        }

        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/validations?token=${token}`, {
                work_experience: workExperience,
                job_category_id: jobCategory,
                job_position: jobPosition,
                reason_accepted: reasonAccepted
            });
            setMessage("Request berhasil dikirim!");
        } catch (error) {
            setMessage("Gagal mengirim request.");
            console.log(error);
        }
    };

    return (
        <>
        <Navbar />
        <main>
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Request Data Validation</h1>
                </div>
            </header>

            <div className="container">
                {message && <div className="alert alert-info">{message}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="d-flex align-items-center mb-3">
                                    <label className="mr-3 mb-0">Job Category</label>
                                    <select className="form-control-sm" onChange={(e) => setJobCategory(e.target.value)}>
                                        <option value="1">Computing and ICT</option>
                                        <option value="2">Construction and building</option>
                                        <option value="3">Animals, land and environment</option>
                                        <option value="4">Design, arts and crafts</option>
                                        <option value="5">Education and training</option>
                                    </select>
                                </div>
                                <textarea className="form-control" cols="30" rows="5" placeholder="Job position separate with , (comma)" onChange={(e) => setJobPosition(e.target.value)}></textarea>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="d-flex align-items-center mb-3">
                                    <label className="mr-3 mb-0">Work Experiences?</label>
                                    <select className="form-control-sm" onChange={(e) => setWorkExperience(e.target.value)}>
                                        <option value="yes">Yes, I have</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <textarea className="form-control" cols="30" rows="5" placeholder="Describe your work experiences" onChange={(e) => setWorkExperience(e.target.value)}></textarea>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="d-flex align-items-center mb-3">
                                    <label className="mr-3 mb-0">Reason Accepted</label>
                                </div>
                                <textarea className="form-control" cols="30" rows="6" placeholder="Explain why you should be accepted" onChange={(e) => setReasonAccepted(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Send Request</button>
                </form>
            </div>

            <footer>
                <div className="container">
                    <div className="text-center py-4 text-muted">
                        Copyright &copy; 2023 - Web Tech ID
                    </div>
                </div>
            </footer>
        </main>
        </>
    );
};

export default Request;
