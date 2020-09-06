import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';


const Card = styled.div`
	border:1px #ccc solid;
	padding:20px;
	font-size:.9em;
	width:90%;
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
const Buttn = styled.button`
	background:lightblue;
	color:white;
	font-size:.8em;
	padding:7px 10px;
	display:block;
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

	return(
		<Card>
			<CardDetails>
				<Name>{job.title}<Light> - {job.company}</Light></Name>
				<Data style={{}}>{new Date(job.created_at).toLocaleDateString()}</Data>
				<Badge>{job.type}</Badge>
				<Badge style={{marginLeft:'5px'}}>{job.location}</Badge>
				<MarkDown>
				<ReactMarkdown source={job.how_to_apply}/>
				</MarkDown>
				<Buttn>View Details</Buttn>
			</CardDetails>
			<img alt={job.company} src={job.company_logo} height='40px'/>
		</Card>
	);
}

export default Job;