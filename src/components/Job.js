import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Card = styled.div`
	border:1px #ccc solid;
	background:#f2f2f2;
	padding:20px;
	font-size:.9em;
	width:80vw;
	margin:0 auto;
	display:flex;
	justify-content:space-between;
`;
const CardDetails = styled.div`
`;
const Name = styled.h4`
`;
const Light = styled.span`
	font-weight:200;
	color:#555;
	margin-left:5px;
`;
const Data = styled.p`
	font-weight:300;
	font-size:.8em;
	margin:5px 0;
	cursor:default;
`;
const Badge = styled.span`
	background:#555;
	color:white;
	padding:2px 5px;
	font-size:.7em;
	border-radius:5px;
	cursor:default;
`;
const Button = styled.button`
	background:#6C63FF;
	color:white;
	font-size:.7em;
	padding:8px 12px;
	border:none;
	border-radius:5px;
	cursor:pointer;
`;
const MarkDown = styled.div`
	fontWeight:400;
	fontSize:.9em;
	margin:10px 0;
	word-break: break-all;
`;

function Job({ job }) {

	const [show, setShow] = useState(false);

	return(
		<Card className="grow">
			<CardDetails>
				<Name>{job.title}<Light> - {job.company}</Light></Name>
				<Data style={{}}>{new Date(job.created_at).toLocaleDateString()}</Data>
				<Badge>{job.type}</Badge>
				<Badge style={{marginLeft:'5px'}}>{job.location}</Badge>
				<MarkDown>
				<ReactMarkdown source={job.how_to_apply}/>
				</MarkDown>
				<Button onClick={() => setShow(!show)} >{show ? 'Hide Details' : 'View Details'}</Button>
				<div style={{display: show ? 'block' : 'none', marginTop:'10px'}} >
					<ReactMarkdown source={job.description}/>
				</div>
			</CardDetails>
			<img alt={job.company} src={job.company_logo} height='40px' style={{display:(window.innerWidth > 600) ? 'block' : 'none'}}/>
		</Card>
	);
}

export default Job;