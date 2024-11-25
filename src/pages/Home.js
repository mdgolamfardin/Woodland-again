import homeImg from "../images/woodland.jpg";

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <img
                className="w-full h-screen object-cover"
                src={homeImg}
                alt="Woodland"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 text-center pt-52">
                {/* Animated Text */}
                
                <h1 className="text-white text-3xl sm:text-3xl lg:text-4xl tracking-wide mb-5 px-20">
                    Welcome to
                </h1> 
                <h1 className="text-white font-bold text-4xl sm:text-4xl lg:text-5xl tracking-wide  px-10">
                    Woodland Conservation Site
                </h1> 
            </div>
        </div>
    );
};

export default Home;
