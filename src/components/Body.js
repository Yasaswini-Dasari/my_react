import { useState } from "react";
import RestuarentContainer from "./RestuarentContainer";
import resList from "../Utils/mockData";

const Body = () => {
    const [listOfRestuarants, setListOfRestuarant] = useState(resList);
    return (
        <div className="body">
            <div className="search">searchbar</div>
            <div className="filter">
                <button onClick={ () => {
                    const filteredList = listOfRestuarants.filter((res) => res.card.card.info.avgRating > 4);
                    setListOfRestuarant(filteredList);
                    console.log(filteredList);
                }

                }>TOP Rated Restaurants</button>
            </div>
            <div className="res_container">
               { listOfRestuarants.map((resObj) => {
                   return <RestuarentContainer key={resObj.card.card.info.id} resData ={resObj} />
                })}

            </div>
           
        </div>
    );
};

export default Body;