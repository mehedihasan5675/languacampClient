
const CardPopularInstructor = ({popularInstructor}) => {
    const {image,instructor_name,instructor_email}=popularInstructor
    console.log(popularInstructor);
    return (
        <div>
              <div  className="card h-[450px] md:h-[500px]  mx-auto  md:w-96 w-[340px]  bg-base-100 shadow-xl">
                <figure className="w-full h-[400px] md:h-[450px]"><img className=" h-full w-full" src={image} alt="LANGUAGE" /></figure>
                <div className="card-body font-mono dark:bg-gray-600 dark:text-white ">
                  <h2 className="card-title">
                    {instructor_name}
                    <div className="badge badge-secondary">POPULAR</div>
                  </h2>
                  <p className="font-medium tracking-wider text-base">{instructor_email}</p>
                 
                  <button className="btn  mt-3 hover:bg-purple-950 text-white bg-violet-900 border-none">See More</button>

                </div>
              </div>
        </div>
    );
};

export default CardPopularInstructor;