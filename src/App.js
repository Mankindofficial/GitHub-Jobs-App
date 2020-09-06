import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import Pagination from './Pagination';
import Forms from './Forms';
import Job from './Job';
import Footer from './Footer';
import './App.css';

function App() {

	const [desc, setDesc] = useState('');
	const [location, setLocation] = useState('');

  const {loading, error, jobs} = useFetchJobs()

  const filt = jobs.filter(job => {
  	return job.location.toLowerCase().includes(location.toLowerCase())
  })

  return (
    <div className="App">
    	<h1 style={{margin:'20px 0', fontWeight:'500'}}>GitHub Jobs</h1>
    	<Forms location={location} setLocation={setLocation} desc={desc} setDesc={setDesc}/>
    	<Pagination/>
      {loading && <h3 style={{margin:'15px'}}>Loading...</h3>}
      {error && <h3 style={{margin:'15px'}}>Error, Try Refreshing...</h3>}
      <div style={{margin:'20px 0'}}>
	      {filt.length !== 0 ? filt.map(job => (
	      	<Job key={Math.random()} job={job}/>
	      )) : <h3>No result found.</h3>}
      </div>
      <Pagination/>
      <Footer/>
    </div>
  );
}

export default App;
