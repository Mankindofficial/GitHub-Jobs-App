import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import Pagination from './components/Pagination';
import Forms from './components/Forms';
import Job from './components/Job';
import Footer from './components/Footer';
import './App.css';


function App() {

	const [page, setPage] = useState(1);
  const [params, setParams] = useState({});

  const {loading, error, jobs, hasNextPage} = useFetchJobs(params, page);

  function onParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    });
  }

  return (
    <div className="App">
      <div className="Appdiv">
    	<h1 className="title">GitHub Jobs</h1>
    	<Forms params={params} onParamChange={onParamChange} />
      </div>
    	<Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h3 className="m5">Loading...</h3>}
      {error && <h3 className="m5">Error, Try Refreshing...</h3>}
      <div className="m10">
	      {jobs.map(job => (
	      	<Job key={Math.random()} job={job}/>
	      ))}
      </div>
      {(jobs.length === 0 && !loading && !error) && <h3 className="m5">No result found.</h3>}
      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      <Footer/>
    </div>
  );
}

export default App;
