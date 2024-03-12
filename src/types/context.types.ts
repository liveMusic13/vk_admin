import { Dispatch, SetStateAction } from 'react';

export interface IFact {
	fact: string;
	setFact: Dispatch<SetStateAction<string>>;
}

export interface IName {
	name: string;
	setName: Dispatch<SetStateAction<string>>;
}

export interface ISaveDataRequest {
	saveDataReq: string;
	setSaveDataReq: Dispatch<SetStateAction<string>>;
}
