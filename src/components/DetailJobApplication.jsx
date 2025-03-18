import { useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const DetailJob = () => {

    const [job , setJob] = useState({});
    const token = localStorage.getItem('token');
    // const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const getJob = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/job_vacancies/${id}?token=${token}`);
                console.log(response.data)
                setJob(response.data.vacancie)
            }

            catch (error)
            {
                console.log(error)
            }


        }


        getJob();
    }, [id])

    return (
        <>
        
        <Navbar />

        <main>

        <header className="jumbotron">
            <div className="container text-center">
                <div>
                    <h1 className="display-4">{job.Company}</h1>
                    <span className="text-muted">{job.address}</span>
                </div>
            </div>
        </header>


        <div className="container">

            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="form-group">
                        <h3>Description</h3>
                        {job.description}
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="form-group">
                        <h3>Select position</h3>
                            <table className="table table-bordered table-hover table-striped"> 
                          
                            <tr>
                                <th width="1">#</th>
                                <th>Position</th>
                                <th>Capacity</th>
                                <th>Application / Max</th>
                                <th rowspan="4" style={{ verticalAlign: "middle", whiteSpace: "nowrap" }} width="1">

                                    <a href="" className="btn btn-primary btn-lg">Apply for this job</a>
                                </th>
                            </tr>
                            <tr className={job.avaliable_position?.apply_capacity === job.avaliable_position?.capacity ? "table-warning" : ""}>
                                <td><input type="checkbox" disabled={job.avaliable_position?.apply_capacity === job.avaliable_position?.capacity} /></td>
                                <td>{job.avaliable_position?.position}</td>
                                <td>{job.avaliable_position?.capacity}</td>
                                <td>{job.avaliable_position?.apply_capacity} / {job.avaliable_position?.capacity}</td>
                            </tr>

                        </table>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <div className="d-flex align-items-center mb-3">
                            <label className="mr-3 mb-0">Notes for Company</label>
                        </div>
                        <textarea className="form-control" cols="30" rows="6" placeholder="Explain why you should be accepted"></textarea>
                    </div>
                </div>
            </div>

        </div>

    </main>


    <footer>
        <div class="container">
            <div class="text-center py-4 text-muted">
                Copyright &copy; 2023 - Web Tech ID
            </div>
        </div>
NameclassName    </footer>

        </>
    )

}

export default DetailJob;