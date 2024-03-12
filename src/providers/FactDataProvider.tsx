import { FC, PropsWithChildren, createContext, useState } from 'react';
import { IFact } from '../types/context.types';

export const FactContext = createContext({} as IFact);

const FactDataProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [fact, setFact] = useState<string>('');

	return (
		<FactContext.Provider value={{ fact, setFact }}>
			{children}
		</FactContext.Provider>
	);
};

export default FactDataProvider;
