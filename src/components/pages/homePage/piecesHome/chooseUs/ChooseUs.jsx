
const ChooseUs = () => {
    return (<div className="bg-gradient-to-t to-[#815ead] from-purple-900 py-16">
        <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-16 lg:px-32">
            <div className="lg:w-5/12 w-full">
                <img className="rounded-3xl w-full h-full" src="https://img.freepik.com/free-photo/group-happy-children-walking-school-autumn_1098-13971.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />
            </div>
            <div className="lg:w-7/12 w-full">
                <div className="text-left ">
                <h1 className="text-base text-yellow-200 font-semibold tracking-widest italic  mb-4">our benefits</h1>
                <h2 className="md:text-5xl text-2xl font-bold tracking-wide text-white my-5 font-mono">WHY CHOOSE US</h2>

                <p className="text-gray-200 font-mono text-base md:w-10/12 w-full tracking-wider ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veritatis, quibusdam qui est veniam voluptates voluptate dolores? Doloribus, ipsum cupiditate.Lorem20 quibusdam qui est veniam voluptates voluptate dolores? Doloribus, ipsum cupiditate.Lorem20</p>

                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3  gap-2 xl:gap-16   mt-7">
                    <div className="md:px-7  md:w-52 px-4 py-5   md:py-5 bg-violet-200 rounded-xl ">
                        <img className="md:w-28 mb-5 w-20 h-20 mx-auto  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/flat-international-human-solidarity-day-illustration_23-2149844029.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=sph" alt="" />
                        <p className="text-center text-sm md:text-lg   font-bold font-mono">Diversity <br /> abounds</p>
                    </div>

                    <div className="md:px-7  md:w-52 px-4 py-5   md:py-5 bg-violet-200 rounded-xl ">
                        <img className="md:w-28 mb-5 w-20 h-20 mx-auto  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/scene-with-road-city_1308-40773.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />
                        <p className="text-center text-sm md:text-lg   font-bold font-mono">Natural <br /> all the way</p>
                    </div>



                    <div className="md:px-7  md:w-52 px-4  py-5   md:py-5 bg-violet-200 rounded-xl ">
                        <img className="md:w-28 mb-5 w-20 h-20 mx-auto  md:h-28 rounded-full" src="https://img.freepik.com/free-vector/camping-place-cartoon-composition-with-yellow-tent-lamp-pot-with-dinner-fire-night-sky_1284-54945.jpg?size=626&ext=jpg&uid=R35423308&ga=GA1.2.1730661534.1680229426&semt=ais" alt="" />
                        <p className="text-center  text-sm md:text-lg   font-bold font-mono">Experienced <br /> and trustworthy</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ChooseUs;