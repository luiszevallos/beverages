import axios from 'axios';
import { HTTP } from './HTTP';

export default async function getDrinkDetails(id) {
  try {
    const url = `${HTTP}/lookup.php?i=${id}`;
    const resolver = await axios.get(url)
    return resolver
  } catch (error) {
    throw error
  }
}
