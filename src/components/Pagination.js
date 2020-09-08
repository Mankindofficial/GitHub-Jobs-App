import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
	margin-left:15px;
`;
const Box = styled.span`
	font-size:.7em;
	padding:7px 10px;
	margin:0 2px;
	background:#fff;
	cursor:pointer;
`;

function Pagination({ page, setPage, hasNextPage }) {

	function setNewPage(amount) {
		setPage(page + amount);
	}

	return(
		<Div>
			{page !== 1 && <Box onClick={() => setNewPage(-1)} >{'<'}</Box>}
			{page !== 1 && <Box onClick={() => setPage(1)} >{'1'}</Box>}
			{page > 2 && <Box>{'...'}</Box>}
			{page > 2 && <Box onClick={() => setNewPage(-1)} >{page - 1}</Box>}
			<Box style={{background:'#6C63FF', color:'white'}}>{page}</Box>
			{hasNextPage && <Box onClick={() => setNewPage(1)} >{page + 1}</Box>}
			{hasNextPage && <Box onClick={() => setNewPage(1)} >{'>'}</Box>}
		</Div>
	);
}

export default Pagination; 