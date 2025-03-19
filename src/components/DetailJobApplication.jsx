import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailJob = () => {
    const [job, setJob] = useState(null);
    const token = localStorage.getItem("token");
    const [positions, setPositions] = useState([]);
    const [notes, setNotes] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getJob = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/job_vacancies/${id}?token=${token}`);
                if (response.data.vacancies.length > 0) {
                    setJob(response.data.vacancies[0]);
                }
            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        };

        getJob();
    }, [id, token]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setPositions((prev) =>
            checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (positions.length === 0) {
            alert("Please select at least one position to apply.");
            return;
        }

        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/applications?token=${token}`, {
                positions,
                vacancy_id: id,
                notes,
            });
            alert("Application submitted successfully!");
        } catch (error) {
            console.error("Error submitting application:", error);
        }
    };

    return (
        <>
            <Navbar />
            {job && (
                <main>
                    <header className="jumbotron">
                        <div className="container text-center">
                            <h1 className="display-4">{job.company}</h1>
                            <span className="text-muted">{job.address}</span>
                        </div>
                    </header>

                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <h3>Description</h3>
                                <p>{job.description}</p>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <h3>Select position</h3>
                                <table className="table table-bordered table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th width="1">#</th>
                                            <th>Position</th>
                                            <th>Capacity</th>
                                            <th>Application / Max</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {job.avaliable?.map((position) => (
                                            <tr
                                                key={position.id}
                                                className={position.apply_capacity === position.capacity ? "table-warning" : ""}
                                            >
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        value={position.id}
                                                        onChange={handleCheckboxChange}
                                                        disabled={position.apply_capacity === position.capacity}
                                                    />
                                                </td>
                                                <td>{position.position}</td>
                                                <td>{position.capacity}</td>
                                                <td>{position.apply_capacity} / {position.capacity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button
                                    onClick={handleSubmit}
                                    className="btn btn-primary btn-lg mt-3"
                                    disabled={positions.length === 0}
                                >
                                    Apply for this job
                                </button>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Notes for Company</label>
                                <textarea
                                    className="form-control"
                                    rows="6"
                                    placeholder="Explain why you should be accepted"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </main>
            )}

            <footer>
                <div className="container text-center py-4 text-muted">
                    Copyright &copy; 2023 - Web Tech ID
                </div>
            </footer>
        </>
    );
};

export default DetailJob;
