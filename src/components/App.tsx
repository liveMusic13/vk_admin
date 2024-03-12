import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useFact } from '../hooks/useFact';
import { useGetAgeByName } from '../hooks/useGetAgeByName';
import { useSaveDataReq } from '../hooks/useSaveDataReq';
import { getDataService } from '../service/getData.service';

const App: FC = () => {
	const { fact, setFact } = useFact();
	const [inputName, setInputName] = useState<string>('');
	const { saveDataReq, setSaveDataReq } = useSaveDataReq();
	const inputRef = useRef<HTMLInputElement>(null);
	const { register, handleSubmit, errors, onSubmit } = useGetAgeByName();
	const [error, setError] = useState<string | null>(null);

	const handleClick = async () => {
		const data: string = await getDataService.getFact();
		setFact(data);

		const firstWordLength = data.split(' ')[0].length;
		if (inputRef.current !== null) {
			setTimeout(() => {
				inputRef.current!.focus();
				inputRef.current!.setSelectionRange(
					firstWordLength + 1,
					firstWordLength + 1
				);
			}, 0);
		}
	};

	const onChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputName(value);

		const regex = /^[A-Za-zА-Яа-яЁё\s]*$/;
		if (!regex.test(value)) {
			setError('Вводите только буквы');
		} else {
			setError(null);
		}
	};

	useEffect(() => {
		const timer = setTimeout(async () => {
			if (inputName && !error) {
				const data = await getDataService.getAgeByName(inputName);
				setSaveDataReq(data);
			}
		}, 3000);

		return () => clearTimeout(timer);
	}, [inputName]);

	return (
		<div style={{ width: '100%' }}>
			<h1>Факты</h1>
			<div>
				<input
					ref={inputRef}
					type='text'
					value={fact}
					onChange={event => setFact(event.target.value)}
					style={{ width: '100%' }}
				/>
				<button onClick={handleClick}>Отправить</button>
			</div>
			<h2>Возраст по имени</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('inputName', {
						pattern: {
							value: /^[A-Za-zА-Яа-яЁё\s]*$/,
							message: 'Только буквы',
						},
						required: true,
					})}
					required
					type='text'
					value={inputName}
					onChange={onChangeFunc}
				/>
				<span>{errors.inputName?.message}</span>
				{error && <span>{error}</span>}
				<p>{saveDataReq}</p>
				<button type='submit'>Отправить</button>
			</form>
		</div>
	);
};

export default App;
