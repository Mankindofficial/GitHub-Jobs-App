import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
	color:#6C63FF;
	margin:5px;
	border:1px solid #6C63FF;
`;
const P = styled.p`
	text-align:center;
	font-size:.8em;
	padding:5px 0;
`;

const Footer = () => {

	return(
		<Foot className="foot">
			<P>Copyright @Mankind_ Project 2020</P>
		</Foot>
	);
}

export default Footer;
