import { useContext } from 'react';
import { FactContext } from '../providers/FactDataProvider';
import { IFact } from '../types/context.types';

export const useFact = (): IFact => useContext(FactContext);
