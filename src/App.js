import './App.css';
import {useState} from 'react';
import {Container} from '@mui/material';
import ThankYou from './components/ThankYou';
// import Attribution from './components/Attribution';
import Rating from './components/Rating';

export default function App() {
	const [submitted, setSubmitted] = useState(false);
	const [rating, setRating] = useState('0');

	const handleClick = (e) => {
		setRating(e.target.value);
	};

	const handleSubmit = () => {
		setSubmitted(true);
	};

	return (
		<Container
			maxWidth='sm'
			sx={{
				alignContent: 'stretch',
			}}>
			{submitted ? (
				<div className='thankyou card-container'>
					<ThankYou rating={rating} />
				</div>
			) : (
				<div className='card-container'>
					<Rating handleClick={handleClick} handleSubmit={handleSubmit} />
				</div>
			)}
			{/* <Attribution /> */}
		</Container>
	);
}
