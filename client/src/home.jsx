import broker_img from './images/desk.png'
import Landing from './homeComponents/landing';
import Offers from './homeComponents/offers';
import HomeNav from './dashboard/navbar';

const Home = () => {
    return (
    <div>
       <HomeNav/>
       <Landing img={broker_img}/>
       <Offers/>
    </div> 
);
}
 
export default Home;