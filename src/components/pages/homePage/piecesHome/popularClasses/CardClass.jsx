import { Link } from "react-router-dom";

const CardClass = ({allClass}) => {
    const {available_seats,total_enrolled,image,instructor_name,class_name,price}=allClass
    return (
       <>
        <div  className="card h-[450px] md:h-[500px]  mx-auto w-[340px] md:w-96 bg-base-100 shadow-xl">
                <figure className="w-full h-[400px] md:h-[450px]"><img className="h-full w-full" src={image} alt="LANGUAGE" /></figure>
                <div className="card-body font-mono dark:bg-gray-600 dark:text-white ">
                  <h2 className="card-title">
                    {class_name}
                    <div className="badge badge-secondary">POPULAR</div>
                  </h2>
                  <p className="font-medium tracking-wider text-base">{instructor_name}</p>
                  <div className="card-actions justify-between">
                    <div >
                        Avalilable seats : <span className="badge badge-outline">{available_seats}</span>
                        </div> 
                    <div >Price : <span className="badge badge-outline">{price}</span>
                    
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                  <div >
                        Total enrolled: <span className="badge badge-outline">{total_enrolled}</span>
                        </div> 
                    <div >
                    <Link to="/classes" ><button className="btn  mt-3 btn-xs tracking-widest hover:bg-purple-950 text-white bg-violet-900 border-none">Go Forward</button></Link>
                    </div>
                  </div>

                </div>
              </div>
       </>
    );
};

export default CardClass;