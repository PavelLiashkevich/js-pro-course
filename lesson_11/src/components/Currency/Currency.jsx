import React from 'react';

export const Currency = ({ currency, value, onChangeValue }) => {
	return (
		<fieldset>
			<legend>Enter currency in {currency}:</legend>
			<input type='number' value={value} onChange={onChangeValue} />
		</fieldset>
	);
};

export default Currency;
