import React from 'react';
import styled from 'styled-components';

const screen = (window.innerWidth > 500);
const Form = styled.div`
	display:flex;
	margin:20px 0;
	max-width:${screen ? '80vw' : '95vw'};
	box-sizing:border-box;
	overflow:hidden;
`;
const Search = styled.div`
`;
const Label = styled.label`
	display:block;
	font-size:.95em;
	margin:5px 0;
`;
const Check = styled.div`
	align-self:flex-end;
	margin-bottom:5px;
	display:flex;
	flex-direction:${ screen ? 'row' : 'column'};
`;
const Span = styled.span`
	font-size: ${screen ? '.9em' : '.85em'};
`;

function Forms({ params, onParamChange }) {

	return(
		<Form>
			<Search>
				<Label>Location</Label>
				<input style={{width:screen?'20vw':'35vw', borderColor:screen?'black':'#6C63FF'}} type="text" onChange={onParamChange} value={params.location} name="location" />
			</Search>
			<Search style={{margin:screen?'0 5vw':'0 10px'}} >
				<Label>Description</Label>
				<input style={{width:screen?'20vw':'35vw', borderColor:screen?'black':'#6C63FF'}} type="text" onChange={onParamChange} value={params.description} name="description" />
			</Search>
			<Check>
				<input style={{order:screen?'1':'2'}} type="checkbox" onChange={onParamChange} value={params.full_name} name="full_name" />
				<Span style={{order:screen?'2':'1'}}>{screen ? 'Only Full Time' : 'Full-Time'}</Span>
			</Check>
		</Form>
	);
}

export default Forms;
