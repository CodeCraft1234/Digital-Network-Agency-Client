import Payment from "../../Components/Payment/Payment";
import Service from "../../Components/Services/Services";
import Cards from "../../components/Cards/Cards";


const Home = () => {
    return (
        <div className="mt-36">
            <Service></Service>
            <Cards></Cards>
            <Payment></Payment>
        </div>
    );
};

export default Home;