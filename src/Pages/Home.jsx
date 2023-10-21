
import Banner from "../Components/Banner";
import Location from "../Components/Location";
import Services from "../Components/Services";
import BrandList from "../Components/brandList";



const Home = () => {
     
    return (
      <div>
        <Banner></Banner>
        <BrandList></BrandList>
        <Services></Services>
        <Location></Location>
      </div>
    );
};

export default Home;