import {ReactComponent as ThankYouLogo} from '../images/illustration-thank-you.svg';
import '../App.css';

export default function ThankYou(props) {
	return (
		<div>
			<div>
				<ThankYouLogo />
			</div>
			<div className='selection'>
				<p>You selected {props.rating} out of 5</p>
			</div>
			<div>
				<h1>Thank you!</h1>
			</div>
			<div>
				<p>
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
			</div>
		</div>
	);
}
