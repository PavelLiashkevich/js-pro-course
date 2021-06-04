import React, { useState } from 'react';
import './converter.css';
import Currency from '../Currency/Currency';

export const Converter = () => {
	const [currencyUsd, setCurrencyUsd] = useState();
	const [currencyByn, setCurrencyByn] = useState();

	const handleUsdChange = event => {
		const value = event.target.value;
		setCurrencyByn(value);
		setCurrencyUsd(value === '' ? 0 : (value * 2.5383).toFixed(3));
	};

	const handleBynChange = event => {
		const value = event.target.value;
		setCurrencyUsd(value);
		setCurrencyByn(value === '' ? 0 : (value * 0.39).toFixed(3));
	};

	return (
		<div>
			<Currency
				currency='USD'
				value={currencyByn}
				onChangeValue={handleUsdChange}
			/>
			<Currency
				currency='BYN'
				value={currencyUsd}
				onChangeValue={handleBynChange}
			/>
		</div>
	);
};
