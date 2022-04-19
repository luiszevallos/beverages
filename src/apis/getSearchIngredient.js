import axios from 'axios';
import { HTTP } from './HTTP';

export default async function getSearchIngredient(ingredient) {
  try {
    const url = `${HTTP}/search.php?i=${ingredient}`;
    const resolver = await axios.get(url)
    return resolver
  } catch (error) {
    throw error
  }
}
