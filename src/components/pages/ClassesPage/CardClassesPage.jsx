const CardClassesPage = ({allClass}) => {
    const {available_seats,image,instructor_name,instructor_email,class_name,price}=allClass
    return (
       <>
        <div  className="card h-[450px] md:h-[500px]  mx-auto w-[340px] md:w-96 bg-base-100 shadow-xl">
                <figure className="w-full h-[400px] md:h-[450px]"><img className="h-full w-full" src={image} alt="LANGUAGE" /></figure>
                <div className="card-body font-mono">
                  <h2 className="card-title">
                    {class_name}
                    
                  </h2>
                 <div className=" flex ">
                 <p className="font-medium tracking-wider text-base">{instructor_name}</p>
                  <span className="badge badge-secondary">instructor</span>
                 </div>
                  <div className="card-actions justify-between">
                    <div >
                        Avalilable seats : <span className="badge badge-outline">{available_seats}</span>
                        </div> 
                    <div >Price : <span className="badge badge-outline">{price}</span>
                    
                    </div>
                  </div>
                  <button className="btn  mt-3 hover:bg-purple-950 text-white bg-violet-900">Select</button>

                </div>
              </div>
       </>
    );
};

export default CardClassesPage;