import api from '../../services/api';
import getToken from '../../components/getToken';

const AuthStr = getToken();

export default async function handleCategory () {
  try {
    const response = await api.get('categories', {
      headers: {
        'Authorization': AuthStr
      }
    });

    return response.data;
  }
  catch (err) {
    alert('Não foi possível buscar Categorias.');
    console.log(err);
  }
}