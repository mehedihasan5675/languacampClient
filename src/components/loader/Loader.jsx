
const Loader = () => {
    return (
        <div className='fixed z-50 top-0 left-0 w-full h-full bg-purple-950 flex justify-center items-center'>
            <div className='flex justify-center     '>
                <span className='w-10 h-10 border-8  border-x-pink-400 border-y-yellow-300  rounded-full  animate-spin'></span>
            </div>
        </div>
    );
};

export default Loader;