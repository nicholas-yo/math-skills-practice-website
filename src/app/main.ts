import k from '../lib/kazda';
import './style.scss';

const randomInt = () => Math.floor(Math.random() * 9 + 1);

const genRandomNumbers = (amountCharacters = 2) => {
	const numbers = [];

	for (let index = 0; index < amountCharacters; index++)
		numbers.push(randomInt());

	return numbers.join('');
};

const genMathExpression = (amountCharacters = 2) => {
	const mathOperations = ['/', '*', '+', '-'];

	const randomOperation =
		mathOperations[Math.floor(Math.random() * mathOperations.length)];

	const leftSide = genRandomNumbers(amountCharacters);
	const rightSide = genRandomNumbers(amountCharacters);

	const formatNumber = (num: string) =>
		Intl.NumberFormat(navigator.language).format(+num);

	const mathExpression = `${formatNumber(
		leftSide
	)} ${randomOperation} ${formatNumber(rightSide)}`;

	return mathExpression;
};

const App = () => {
	let mathExpression = genMathExpression();

	const handleSubmit = async (ev: SubmitEvent) => {
		ev.preventDefault();

		const { evaluate } = await import('mathjs');

		const target = ev.target as HTMLFormElement;

		const responseInput = target.response as HTMLInputElement;

		const result = document.getElementById('result');

		if (evaluate(mathExpression) === +responseInput.value) {
			const conta = document.getElementById('conta');

			const newMathExpression = genMathExpression();

			mathExpression = newMathExpression;

			responseInput.value = '';

			conta.textContent = newMathExpression;
			result.textContent = 'Acertou';
			return;
		}

		result.textContent = 'Errou';
	};

	const regenMathExpressionOnClick = (ev: MouseEvent) => {
		ev.preventDefault();

		const inputAmountCharacters = document.getElementById(
			'amount-characters'
		) as HTMLInputElement;

		const conta = document.getElementById('conta');

		const newMathExpression = genMathExpression(
			+inputAmountCharacters.value || 2
		);

		mathExpression = newMathExpression;

		conta.textContent = newMathExpression;
	};

	return [
		k.createElement('h1', null, 'Math Skills Practice'),
		k.createElement(
			'p',
			{ className: 'conta', id: 'conta' },
			mathExpression
		),
		k.createElement(
			'form',
			{
				onSubmit: handleSubmit
			},
			k.createElement(
				'label',
				{ htmlFor: 'response' },
				'Enter the result:'
			),
			k.createElement('input', {
				type: 'number',
				id: 'response',
				inputMode: 'numeric'
			}),
			k.createElement('button', { type: 'submit' }, 'Verify'),
			k.createElement('p', { className: 'result', id: 'result' }),
			k.createElement(
				'label',
				{ htmlFor: 'amount-characters' },
				'Amount of Characters:'
			),
			k.createElement('input', {
				type: 'number',
				inputMode: 'numeric',
				placeholder: '2',
				id: 'amount-characters'
			}),
			k.createElement(
				'button',
				{
					onClick: regenMathExpressionOnClick
				},
				'Generate Math Expression'
			)
		)
	];
};

export default App;
