import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

const AddJob = () => {

    const [Job , setJob] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        const getJob = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/job_vacancies?token=${token}`);
                console.log(response.data)
                setJob(response.data.vacancies)
            }

            catch (error)
            {
                console.log(error)
            }


        }


        getJob();
    }, [])


    return (
        <>
        <Navbar />
        <main>

    <header className="jumbotron">
        <div className="container">
            <h1 className="display-4">Job Vacancies</h1>
        </div>
    </header>


    <div className="container mb-5">

        <div className="section-header mb-4">
            <h4 className="section-title text-muted font-weight-normal">List of Job Vacancies</h4>
        </div>

        <div className="section-body">
        {Job.map((job, index) => (
              <article className="spot" key={index}>
              <div className="row">
                  <div className="col-5">
                      <h5 className="text-primary">{job.Company}</h5>
                      <span className="text-muted">{job.address}</span>
                  </div>
                  <div className="col-4">
                      <h5>Available Position (Capacity)</h5>
                      {job.avaliable_position ? (
                        <span className="text-muted">
                            {job.avaliable_position.position} ({job.avaliable_position.capacity})
                        </span>
                    ) : (
                        <span className="text-muted">Tidak ada posisi tersedia</span>
                    )}
                  </div>
                  <div className="col-3">
                      <button className="btn btn-danger btn-lg btn-block">
                          Detail / Apply
                      </button>
                  </div>
              </div>
          </article>
        ))}
          

            <article className="spot unavailable">
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">PT. Maju Mundur Sejahtera</h5>
                        <span className="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                    </div>
                    <div className="col-4">
                        <h5>Available Position (Capacity)</h5>
                        <span className="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                    </div>
                    <div className="col-3">
                        <div className="bg-success text-white p-2">
                            Vacancies have been submitted
                        </div>
                    </div>
                </div>
            </article>

            <article className="spot">
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">PT. Maju Mundur Sejahtera</h5>
                        <span className="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                    </div>
                    <div className="col-4">
                        <h5>Available Position (Capacity)</h5>
                        <span className="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger btn-lg btn-block">
                            Detail / Apply
                        </button>
                    </div>
                </div>
            </article>
            <article className="spot">
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">PT. Maju Mundur Sejahtera</h5>
                        <span className="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                    </div>
                    <div className="col-4">
                        <h5>Available Position (Capacity)</h5>
                        <span className="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger btn-lg btn-block">
                            Detail / Apply
                        </button>
                    </div>
                </div>
            </article>
            <article className="spot">
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">PT. Maju Mundur Sejahtera</h5>
                        <span className="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                    </div>
                    <div className="col-4">
                        <h5>Available Position (Capacity)</h5>
                        <span className="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger btn-lg btn-block">
                            Detail / Apply
                        </button>
                    </div>
                </div>
            </article>
            <article className="spot">
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">PT. Maju Mundur Sejahtera</h5>
                        <span className="text-muted">Ds. Abdullah No. 31, DKI Jakarta</span>
                    </div>
                    <div className="col-4">
                        <h5>Available Position (Capacity)</h5>
                        <span className="text-muted">Desain Grafis (3), Programmer (1), Manager (1)</span>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger btn-lg btn-block">
                            Detail / Apply
                        </button>
                    </div>
                </div>
            </article>

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
    )

}

export default AddJob;