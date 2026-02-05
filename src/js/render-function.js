import { refs } from './refs';

export function renderCategories(data) {
  const markup = data
    .map(
      category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
`
    )
    .join('');
  refs.categoryList.innerHTML = markup;
}
