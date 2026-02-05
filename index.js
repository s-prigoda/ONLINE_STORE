import"./assets/styles-JE8YjOlG.js";import{a as o,i as r}from"./assets/vendor-4yCzdkXl.js";const a="https://dummyjson.com/",c={categories:"products/category-list"};o.defaults.baseURL=a;async function i(){const{data:t}=await o(c.categories);return t}const n={categoryList:document.querySelector("ul.categories")};function g(t){const e=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>
`).join("");n.categoryList.innerHTML=e}async function u(){try{const t=await i();g(["All",...t])}catch(t){console.log(t),r.error({message:"sorry, error!"})}}u();
//# sourceMappingURL=index.js.map
