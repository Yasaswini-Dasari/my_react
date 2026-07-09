import { useState,useEffect} from "react";
import RestuarentContainer, {withPromotedLabel} from "./RestuarentContainer";
import resList from "../Utils/mockData";
import list from "../Utils/mockData1";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useContext } from "react";

const Body = () => {
    const [listOfRestuarants, setListOfRestuarant] = useState(list);
    const [copyRes, setCopyRes] = useState(list);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestuarentContainer);
    const {loggedInUser, setUserName} = useContext(UserContext)

    // console.log("Body Rendered")
    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // const fetchData = async () => {
    //     //used fetch link from crosproxy.io to get data or else swiggy is bloking data
    //     const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83661&tags=layout_CCS_Desserts&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    //     const json = await data.json();
    //     console.log(json);  
    //     //optional chaining 
    //     setListOfRestuarant(json?.data?.cards?.slice(3));
    //     setCopyRes(json?.data?.cards?.slice(3))

    //   }

    // conditional rendering and lets use ternary operator 

    // const 
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you are offline!!! please check your internet connection</h1>

    return listOfRestuarants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={
                            (e) => {
                                setSearchText(e.target.value)
                            }
                        }
                    />
                    <button 
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick = { 
                        () => {
                            // filter the restuarants and update the UI 
                            // searchText
                            const filteredRestuarent = listOfRestuarants.filter( (res) => res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                            setCopyRes(filteredRestuarent);
                        }
                    }>search</button>

                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button 
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={ () => {
                        const filteredList = listOfRestuarants.filter((res) => res.card.card.info.avgRating > 4.4);
                        // setListOfRestuarant(filteredList);
                        setCopyRes(filteredList);
                    }

                    }>TOP Rated Restaurants</button> 

                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>Username : </label>
                    <input className="border border-black p-2 m-2"
                    value={loggedInUser}
                    onChange={(e)=> {setUserName(e.target.value)}}
                    ></input>

                </div>
            </div>
            <div className="flex flex-wrap">

                {copyRes.map((resObj) => (

                    <Link
                        key={resObj.card.card.info.id}
                        to={"/restaurants/" + resObj.card.card.info.id}>
                           { resObj.card.card.info.promoted ? 
                            (< RestaurantCardPromoted resData={resObj}/> ): 
                            (<RestuarentContainer resData={resObj} />) }
                    </Link>

                ))}

            </div>
           
        </div>
    );
};

export default Body;
