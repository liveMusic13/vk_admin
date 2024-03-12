import { useContext } from 'react';
import { NameContext } from '../providers/NameProvider';
import { IName } from '../types/context.types';

export const useName = (): IName => useContext(NameContext);
