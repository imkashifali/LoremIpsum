import React, { useState } from "react";
import list from "./List";
import Categories from "./Categories";
import Menu from "./Menu";

const categoriesList =['all',...new Set(list.map((itm)=> itm.category))]
console.log(categoriesList)
const App = () => {
  const [menuItems, setmenuItems] = useState(list);
  const [categories, setCategories] = useState(categoriesList);

  const filterItem = (category) =>{
   if(category ==='all'){
    setmenuItems(list)
    return;
   }
    let newItem = list.filter((item)=> item.category ===category)
    setmenuItems(newItem)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categoriesList={categories} filterItem={filterItem}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
