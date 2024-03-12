import { FC, PropsWithChildren, createContext, useState } from 'react';
import { ISaveDataRequest } from '../types/context.types';

export const SaveDataRequestContext = createContext({} as ISaveDataRequest);

const SaveDataRequestProvider: FC<PropsWithChildren<unknown>> = ({
	children,
}) => {
	const [saveDataReq, setSaveDataReq] = useState<string>('');

	return (
		<SaveDataRequestContext.Provider value={{ saveDataReq, setSaveDataReq }}>
			{children}
		</SaveDataRequestContext.Provider>
	);
};

export default SaveDataRequestProvider;
