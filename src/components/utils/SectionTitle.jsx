
const SectionTitle = ({body}) => {
    return (
        <div className="text-center text-white uppercase italic animate-pulse pt-16 w-full md:w-7/12 mx-auto">
            <p className="w-3/6 h-1 bg-purple-800  shadow-2xl shadow-white mx-auto"></p>
            <div className="text-center my-3 text-lg md:text-3xl tracking-wider font-semibold">---{body}---</div>
            <p className="w-3/6 h-1 bg-purple-800  shadow-2xl shadow-white mx-auto"></p>
        </div>
    );
};

export default SectionTitle;