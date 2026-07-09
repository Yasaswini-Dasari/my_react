import User from "./User";
import UserClass from "./UserClass";

const About = () => (
    <div className="about">
        <h1 className="font-bold py-4 text-lg" >About us</h1>
        <h2>This is About us page</h2>
        <h2>Below are our Team members</h2>
        <UserClass name = {"Heidi"} location = {"Hyderabad"} />
    </div>
)

export default About;