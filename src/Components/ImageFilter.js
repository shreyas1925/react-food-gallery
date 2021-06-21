import React, { useState } from "react";
import "./Gallery.css";
import Menu from "./TabsGallery";
import MenuItems from "./MenuItems";
import ImageList from "./ImageList";

const allCatvalues = [
  ...new Set(
    Menu.map((curelm) => {
      return curelm.category;
    })
  ),
  "all",
];

const ImageFilter = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatvalues);

  const filterItem = (categItem) => {
    if (categItem === "all") {
      setItems(Menu);
      return;
      // we will give return because this const function is waiting for something to get return
    }
    const updatedItems = Menu.filter((cur) => {
      return cur.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Welcome to my Food Gallery 😍😜
      </h1>
      <hr />

      <ImageList filterItem={filterItem} catItems={catItems} />

      <MenuItems items={items} />
    </>
  );
};

export default ImageFilter;
