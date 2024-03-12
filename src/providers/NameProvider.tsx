import { FC, PropsWithChildren, createContext, useState } from 'react';
import { IName } from '../types/context.types';

export const NameContext = createContext({} as IName);

const NameProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [name, setName] = useState<string>('');

	return (
		<NameContext.Provider value={{ name, setName }}>
			{children}
		</NameContext.Provider>
	);
};

export default NameProvider;
