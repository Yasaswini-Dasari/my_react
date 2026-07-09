import { useContext } from "react";
import { RES_URL } from "../Utils/constants";
import UserContext from "../Utils/UserContext";

export const RestuarentContainer = (props) => {
    const {resData} = props  //destucturing it on the fly 
    const {id, cloudinaryImageId,name, cuisines, avgRating,sla} = resData?.card?.card?.info;

    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
            <img className="rounded-lg" alt="image not rendered" src={RES_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating+" Star Rating"}</h4>
            <h4>{sla.slaString}</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    )
}

// Higher order component 

//input - RestuarantCard , Output -- Promoted restuarant card

export const withPromotedLabel = (RestuarentContainer) => {
    return (props) => {
        return (
            <div> 
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestuarentContainer {...props} />
            </div>
        )
    }
}

export default RestuarentContainer;