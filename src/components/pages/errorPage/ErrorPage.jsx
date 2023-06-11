import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center absolute top-[22%]">
            <img className="w-96  h-96 rounded-3xl" src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1919.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=sph" alt="" />
            <Link to="/"><button className="btn btn-outline btn-accent text-center mt-10">Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;