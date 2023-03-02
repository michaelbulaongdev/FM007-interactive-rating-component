import './App.css';
import {useState} from 'react';
import {Container} from '@mui/material';
import ThankYou from './components/ThankYou';
import Attribution from './components/Attribution';

export default function App() {
	const [submitted, setSubmitted] = useState(true);
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
				textAlign: 'center',
				alignContent: 'stretch',
			}}>
			{submitted ? (
				<div className='card-container'>
					<ThankYou rating={rating} />
				</div>
			) : (
				<div className='card-container'>
					<h1>How did we do?</h1>
				</div>
			)}
			<Attribution />
		</Container>
	);
}
