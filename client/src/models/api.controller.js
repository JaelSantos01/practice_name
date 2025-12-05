const ApiController = {};
const ENV = import.meta.env;
const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}/api/nom`;

ApiController.namesAll = async names => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(names),
        });

        return await response.json();
    } catch (error) {
        console.error('Error al unir los nombres:', error);
        throw error;
    }
};

export default ApiController;