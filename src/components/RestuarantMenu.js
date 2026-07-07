import { useParams } from "react-router-dom";
import menuMap from "../Utils/menuMap";


const RestuarantMenu = () => {

    const { id } = useParams();
    const menu1 = menuMap[id];

    const {name,cuisines, costForTwo } = menu1[0]?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = menu1[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - ₹{costForTwo/100} for two</p>
            <h2>Menu</h2>
            <h3>Recomended</h3>
            <ul>
                {itemCards?.map((item) => (
                    <div key={item.card.info.id}>
                        <h4>{item.card.info.name} -- ₹{item.card.info.price / 100 || item?.card?.info?.variantsV2?.pricingModels[0]?.price/100} </h4>
                    </div>
                    ))}
            </ul>
        </div>
    )
}

export default RestuarantMenu;

