import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);

  const filterData = (searchInput, restraunts) => {
    return restraunts.filter((restraunt) =>
      restraunt.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const filterTopRest = (restraunts) => {
    return restraunts.filter((restraunt) => restraunt.info.avgRating >= 4.1);
  };
  const fetchData = async () => {
    const fetchedData = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=13.0624266&lng=77.6233434"
    );
    const jsonData = await fetchedData.json();
    setRestraunts(
      jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(jsonData);
    // setFilteredRest(restraunts);
    setFilteredRest(
      jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  return restraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body-top">
        <div className="search-sec">
          <input
            type="text"
            className="search-bar"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button
            onClick={() => {
              const filterRest = filterData(searchInput, restraunts);
              setFilteredRest(filterRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const topRest = filterTopRest(restraunts);
            setFilteredRest(topRest);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="restrauntList">
        {filteredRest.map((value) => (
          <RestrauntCard {...value.info} key={value?.info?.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
