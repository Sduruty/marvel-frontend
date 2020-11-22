import React from "react";
import { withRouter } from "react-router-dom";

import Item from "../components/Item";

const FavList = ({ data, favType, apiUrl }) => {
  return (
    <div className="favList">
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
            apiUrl={apiUrl}
          ></Item>
        );
      })}
    </div>
  );
};

export default withRouter(FavList);
