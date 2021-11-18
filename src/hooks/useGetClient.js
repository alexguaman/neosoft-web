import { useEffect, useState } from "react";
import axios from 'axios';

const useGetClients = (API) => {
	const [clients, setClients] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		
		setClients(response.data);
	}, []);

	return clients;
};

export default useGetClients;