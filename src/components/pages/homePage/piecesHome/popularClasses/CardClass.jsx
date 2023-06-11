const CardClass = ({allClass}) => {
    const {available_seats,image,instructor_name,language_name,price}=allClass
    return (
       <>
        <div  className="card mainCard mx-auto w-96 bg-base-100 shadow-xl">
                <figure><img className="" src={image} alt="LANGUAGE" /></figure>
                <div className="card-body cardBody">
                  <h2 className="card-title">
                    {language_name}
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
                  <button className="btn  mt-3 hover:bg-purple-950 text-white bg-violet-900">Select</button>

                </div>
              </div>
       </>
    );
};

export default CardClass;