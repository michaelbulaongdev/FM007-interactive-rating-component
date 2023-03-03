import {useState} from 'react';
import {ReactComponent as StarLogo} from '../images/icon-star.svg';

export default function Rating(props) {
	const [selectedButton, setSelectedButton] = useState(null);

	const numberButtons = [1, 2, 3, 4, 5];

	const handleClick = (num) => {
		props.setRating(num);
		setSelectedButton(num);
	};

	return (
		<div>
			<div className='star-circle'>
				<StarLogo />
			</div>
			<div>
				<h1>How did we do?</h1>
				<p>
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
			</div>
			<div className='numbers'>
				{numberButtons.map((num) => {
					return (
						<button
							key={num}
							onClick={() => handleClick(num)}
							className='number-btn'
							style={{
								backgroundColor:
									selectedButton === num ? 'var(--orange)' : null,
							}}>
							{num}
						</button>
					);
				})}
			</div>
			<div className='submit-container'>
				<button className='submit-btn' onClick={props.handleSubmit}>
					SUBMIT
				</button>
			</div>
		</div>
	);
}
