import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
	display:flex;
	margin:30px 0;
`;
const Search = styled.div`
	
`;
const Label = styled.label`
	display:block;
	font-size:.9em;
	margin:5px 0;
`;
const Check = styled.div`
	align-self:center;
`;
const Span = styled.span`
	margin-left:5px;
	font-size:.9em;
`;

function Forms({ location, desc, setLocation, setDesc }) {

	return(
		<Form>
			<Search>
				<Label>Location</Label>
				<input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
			</Search>
			<Search style={{marginLeft:'50px'}}>
				<Label>Description</Label>
				<input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/>
			</Search>
			<Check style={{marginLeft:'20px'}}>
				<input type="checkbox"/>
				<Span>Only Full Time</Span>
			</Check>
		</Form>
	);
}

export default Forms;