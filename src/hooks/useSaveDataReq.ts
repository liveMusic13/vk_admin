import { useContext } from 'react';
import { SaveDataRequestContext } from '../providers/SaveDataRequestProvider';
import { ISaveDataRequest } from '../types/context.types';

export const useSaveDataReq = (): ISaveDataRequest =>
	useContext(SaveDataRequestContext);
