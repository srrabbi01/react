import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { FaRegMeh } from 'react-icons/fa';

export default function Error() {
	return (
		<>
			<div className='roomsError'></div>
			<Banner
				title='ERROR 404 NOT FOUND'
				subtitle='You are lost !! ITs dark everywhere'>
				<FaRegMeh className='lost'></FaRegMeh>
				<Link to='/' className='btn btn-warning'>
					RETURN HOME
				</Link>
			</Banner>
		</>
	);
}