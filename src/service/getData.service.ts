import axios from 'axios';
import { IResponse } from '../types/response.types';

const cache: { [key: string]: IResponse } = {};

export const getDataService = {
	getFact: async () => {
		try {
			const response = await axios.get('https://catfact.ninja/fact');

			console.log(response);
			return response.data.fact;
		} catch (error) {
			console.log(error);
		}
	},
	getAgeByName: async (name: string) => {
		const url = `https://api.agify.io/?name=${name}`;

		if (cache[url]) {
			return cache[url].name;
		}

		try {
			const response = await axios.get(url);

			console.log(response);

			cache[url] = response.data;
			return response.data.name;
		} catch (error) {
			console.log(error);
		}
	},
};
