import { useState } from 'react';

export const Button = () => {
	const [count, setCount] = useState(0);

	const Inc = () => {
		setCount(count + 1);
	};
	const Dec = () => {
		setCount(count - 1);
	};
	const Reset = () => {
		setCount(0);
	};

	return (
		<div className='wrapper'>
			<div>
				<h1>Clicker</h1>
				<h1>{count}</h1>
			</div>
			<div className='buttons'>
				<button className='button buttonInc' onClick={Inc}>
					+
				</button>
				<button className='button buttonReset' onClick={Reset}>
					Reset
				</button>
				<button className='button buttonDec' onClick={Dec}>
					-
				</button>
			</div>
		</div>
	);
};
