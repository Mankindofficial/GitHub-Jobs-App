import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
	display:flex;
	align-items:center;
	justify-content:space-between;
	width:130px;
`;
const SDiv = styled.div`
	display:flex;
	width:70px;
	justify-content:space-between;
`;
const Direction = styled.span`
	padding:5px 5px;
	background:#ccc;
	cursor:pointer;

`;
const Box = styled.span`
	padding:5px 7px;
	background:lightblue;
	cursor:pointer;
`;


function Pagination() {

	return(
		<Div>
			<Direction>{'<'}</Direction>
			<SDiv>
				<Box>1</Box>
				<Box>2</Box>
				<Box>3</Box>
			</SDiv>
			<Direction>{'>'}</Direction>
		</Div>
	);
}

export default Pagination; 