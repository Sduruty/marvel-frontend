import React, { useEffect } from "react";
import starIcon from "../img/starIcon.svg";
import axios from "axios";

const FavStar = ({
  id,
  iconFavoriteStatus,
  title,
  setIconFavoriteStatus,
  favType,
  apiUrl,
  page,
}) => {
  // CHECK IF ITEM ALREADY IN DB AND SETSTATE

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await axios.get(`${apiUrl}/favexists?idMarvel=${id}`);
        const data = response.data;
        data === true
          ? setIconFavoriteStatus(true)
          : setIconFavoriteStatus(false);
      } catch (err) {
        console.log(err);
      }
    };

    checkStatus();
    // eslint-disable-next-line
  }, [id, setIconFavoriteStatus, page]);

  // ON CLICK ON STAR, ADD TO DB

  const addToFavs = async (id, favType) => {
    try {
      await axios.post(`${apiUrl}/favs/create`, {
        category: favType,
        item: {
          idMarvel: id,
          title: title,
        },
      });
      setIconFavoriteStatus(true);
    } catch (err) {
      console.log(err);
    }
  };

  // IF ALREADY IN DB, REMOVE FROM DB ON CLICK

  const removeFromFavs = async (id) => {
    try {
      await axios.post(`${apiUrl}/favs/remove`, {
        idMarvel: id,
      });
      setIconFavoriteStatus(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="favStuff">
      <button
        className={
          iconFavoriteStatus === false ? "iconFavorite" : "IconFavoriteActive"
        }
        onClick={() =>
          iconFavoriteStatus === false
            ? addToFavs(id, favType)
            : removeFromFavs(id, favType)
        }
      >
        <img src={starIcon} alt="" />
      </button>
    </div>
  );
};

export default FavStar;
