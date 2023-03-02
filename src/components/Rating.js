import {ReactComponent as StarLogo} from '../images/icon-star.svg';

export default function Rating(props) {
	const numberButtons = [1, 2, 3, 4, 5];

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
				<button className='button'>1</button>
			</div>
			<div className='submit-button'>
				<button onSubmit={props.handleSubmit}>Submit</button>
			</div>
		</div>
	);
}
