import axios from 'axios';
import { HTTP } from './HTTP';

export default async function getSearchBeverages(text) {
  try {
    const url = `${HTTP}/search.php?s=${text}`;
    const resolver = await axios.get(url)
    return resolver
  } catch (error) {
    throw error
  }
}
