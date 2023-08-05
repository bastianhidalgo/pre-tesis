import axios from 'axios';

 export const getVisitas = async () => {
    const response = await axios.get (`localhost:80/api/usuarios/getall`);
    return response
}
export const createVisita =  (visita) => {
    const response =  axios.post(`localhost:80/api/usuarios/create`,visita);
    return response
}
