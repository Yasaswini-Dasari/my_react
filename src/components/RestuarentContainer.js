import { RES_URL } from "../Utils/constants";

export const RestuarentContainer = (props) => {
    console.log(props); 
    const {resData} = props  //destucturing it on the fly 
    const {cloudinaryImageId,name, cuisines, avgRating,sla} = resData?.card?.card?.info;
    return (
        <div className="rest-card">
            <img className="res-logo" alt="image not rendered" src={RES_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating+" Star Rating"}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestuarentContainer;