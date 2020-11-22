import React from "react";

import Item from "../components/Item";

const ItemList = ({ data, favType, apiUrl, page }) => {
  return (
    <div className="itemList">
      {data.map((item, id) => {
        let thumbnail = item.thumbnail.path + "." + item.thumbnail.extension;
        let description = item.description;
        let title = item.title || item.name;

        return (
          <Item
            thumbnail={thumbnail}
            description={description}
            title={title}
            id={item.id}
            key={id}
            favType={favType}
            page={page}
            apiUrl={apiUrl}
          ></Item>
        );
      })}
    </div>
  );
};

export default ItemList;
