import User from "./User";
import UserClass from "./UserClass";

const About = () => (
    <div className="about">
        <h1>About</h1>
        <h2>This is About page</h2>
        <h2>Below are our Team members</h2>
        <UserClass name = {"Heidi"} location = {"Hyderabad"} />
    </div>
)

export default About;