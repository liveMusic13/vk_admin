import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getDataService } from '../service/getData.service';
import { IInputName } from '../types/form.types';
import { useSaveDataReq } from './useSaveDataReq';

export const useGetAgeByName = () => {
	const { setSaveDataReq } = useSaveDataReq();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IInputName>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IInputName> = async data => {
		console.log(data);
		const response = await getDataService.getAgeByName(data.inputName);
		setSaveDataReq(response);
	};

	return useMemo(() => {
		return {
			register,
			handleSubmit,
			errors,
			onSubmit,
		};
	}, [errors]);
};
