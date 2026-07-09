import { useParams } from "react-router-dom";
import menuMap from "../Utils/menuMap";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";


const RestuarantMenu = () => {

    const { id } = useParams();
    const menu1 = menuMap[id];

    const {name,cuisines, costForTwo } = menu1[0]?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = menu1[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = menu1[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c?.card?.["card"]?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    const [showIndex, setShowIndex] = useState();



    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines?.join(", ")} - ₹{costForTwo/100} for two
            </p>
            {/* categories Accordians -- Title and a body which is collapsable (like drop down)*/}
            {
                categories.map((category, index)=>(
                    // Controlled Component
                    <RestaurantCategory 
                    key={category?.card?.card?.title}
                    data = {category?.card?.card}
                    showItems = {index === showIndex ? true : false}
                    setShowIndex = {()=> setShowIndex(index)}
                    />
                ))
            }
        </div>
    )
}

export default RestuarantMenu;