
const CardInstructorsPage = ({Instructors}) => {
    const {photoURL,name,email}=Instructors
    console.log(photoURL);
    return (
        <div>
              <div  className="card h-[400px] md:h-[480px]  mx-auto  md:w-96 w-[340px]  bg-base-100 shadow-xl">
                <figure className="w-full h-[400px] md:h-[450px]"><img className=" h-full w-full" src={photoURL} alt="LANGUAGE" /></figure>
                <div className="card-body font-mono dark:bg-gray-600 dark:text-white ">
                  <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">instructor</div>
                  </h2>
                  <p className="font-medium tracking-wider text-base">{email}</p>
                 
                  <button className="btn  mt-3 hover:bg-purple-950 border-none text-white bg-violet-900">Show Classes</button>

                </div>
              </div>
        </div>
    );
};

export default CardInstructorsPage;