import Banner from "../piecesHome/banner/Banner";
import ChooseUs from "../piecesHome/chooseUs/ChooseUs";
import ClassesPopular from "../piecesHome/popularClasses/ClassesPopular";
import PopularInstructor from "../piecesHome/popularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <ClassesPopular></ClassesPopular>
            <PopularInstructor></PopularInstructor>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;