import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { fetchCategories } from './products-api';
import { renderCategories } from './render-function';

export async function getCategories() {
  try {
    const data = await fetchCategories();
    renderCategories(['All', ...data]);
  } catch (error) {
    console.log(error);
    iziToast.error({ message: 'sorry, error!' });
  }
}
