import './App.css';
import {useState} from 'react';
import {Container} from '@mui/material';
import ThankYou from './components/ThankYou';
// import Attribution from './components/Attribution';
import Rating from './components/Rating';

export default function App() {
	const [submitted, setSubmitted] = useState(false);
	const [rating, setRating] = useState('0');

	const handleSubmit = () => {
		rating !== '0' ? setSubmitted(true) : setSubmitted(false);
	};

	return (
		<Container
			maxWidth='sm'
			sx={{
				alignContent: 'stretch',
			}}>
			{submitted ? (
				<div className='card-container thank-you'>
					<ThankYou rating={rating} />
				</div>
			) : (
				<div className='card-container'>
					<Rating setRating={setRating} handleSubmit={handleSubmit} />
				</div>
			)}
			{/* <Attribution /> */}
		</Container>
	);
}
