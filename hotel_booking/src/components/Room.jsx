import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';

const Room = ({ room: { name, slug, images, price } }) => {
	// const { name, slug, images, price } = room;
	return (
		<div className='col-md-4 col-12 mx-auto p-2'>
			<div className='card shadow-lg border-0 room'>
				<img
					src={images[0].url || defaultImg}
					alt='single room'
					className='img-fluid'
				/>
				<div className='price-top'>
					<h6>Tk {price}</h6>
					<p>per night</p>
				</div>
				<Link
					to={`/rooms/${slug}`}
					className='btn-warning room-link text-center'>
					Features
				</Link>
				<p className='room-info'>{name}</p>
			</div>
		</div>
	);
};
export default Room;
