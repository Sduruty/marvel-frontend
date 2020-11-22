import React, { useState } from "react";
import { trimText } from "../functions/trimText";
import { Link, withRouter } from "react-router-dom";

import pictureNotFound from "../img/pictureNotFound.jpg";
import FavStar from "../components/FavStar";

var he = require("he");

const Item = ({ thumbnail, description, id, title, favType, apiUrl, page }) => {
  const [descOnHover, setDescriptionOnHover] = useState("disabled");
  const [iconFavoriteStatus, setIconFavStatus] = useState(false);

  const favTypeSing = favType.slice(0, favType.length - 1);

  const showDescription = (event) => {
    setDescriptionOnHover("enabled");
  };

  const hideDescription = (event) => {
    setDescriptionOnHover("disabled");
  };

  he.decode(title);
  title.replace("<br>", "");
  description &&
    (description = he.decode(description) && description.replace("<br>", ""));

  thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" &&
    (thumbnail = pictureNotFound);

  return (
    <div
      className={
        "itemDivision " +
        (favType === "comics"
          ? "comicsItem"
          : favType === "characters"
          ? "charactersItem"
          : "otherItem")
      }
      key={id}
    >
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
          // backgroundSize: "contain",
          backgroundPosition: "center top",
          backgroundClip: "content-box",
          backgroundOrigin: "content-box",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <FavStar
          id={id}
          title={title}
          favType={favType}
          setIconFavStatus={setIconFavStatus}
          iconFavoriteStatus={iconFavoriteStatus}
          page={page}
          apiUrl={apiUrl}
        ></FavStar>
        <Link
          to={`/${favTypeSing}/${id}`}
          onMouseEnter={showDescription}
          onMouseLeave={hideDescription}
        >
          <div className="itemTxtContent">
            <h2>{title}</h2>
            {description && (
              <div className={"itemDescription " + descOnHover}>
                <span>{description && trimText(description, 100)}</span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Item);
