import {ReactComponent as StarLogo} from '../images/icon-star.svg';
import {useState} from 'react';

export default function Rating(props) {
	const numberButtons = [1, 2, 3, 4, 5];

	const handleClick = (e) => {
		props.setRating(e.target.value);
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
				{numberButtons.map((item) => {
					return (
						<button value={item} onClick={handleClick} className='number-btn'>
							{item}
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
