
import { motion } from "framer-motion";
const Blog = () => {
    
    return (
        
        <div>
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                  Food <span className="text-lime-600">Blog</span>
                </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500 ">
            A blog dedicated to fostering community-driven efforts to share surplus food resources and minimize food waste through innovative solutions and collaborative initiatives.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
        <motion.div whileHover = {{scale: 1.02}}>
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/hdRPPwF/giving-tuesday.jpg" alt="" />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    Join the Movement: Sharing Surplus Food for a Sustainable Future
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm text-justify">
                    Dive into the heart of our Food Sharing and Surplus Reduction Platform as we explore the transformative power of communal efforts in reducing food waste. Discover inspiring stories innovative solutions that empower individuals and communities to share surplus food resources and contribute to a more sustainable and equitable world.
                    </p>

                    <p className="mt-3 text-sm text-lime-600">21 October 2023</p>
                </div>
            </div>
            </motion.div>
            <motion.div whileHover = {{scale: 1.02}}>
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/pRvF3KK/people-giving-a-donation-box-with-food-for-charity-and-solidarity-vector.jpg" alt="" />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    From Surplus to Solution: The Impact of Food Sharing Initiatives
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm text-justify">
                    Explore the ripple effect of food sharing initiatives on our blog dedicated to Food Sharing and Surplus Reduction. Uncover how grassroots movements, digital platforms, fostering social connections, and addressing critical issues of hunger and food insecurity while championing sustainability and waste reduction efforts.
                    </p>

                    <p className="mt-3 text-sm text-lime-600">20 October 2023</p>
                </div>
            </div>
            </motion.div>
        </div>
    </div>
</section>

        </div>
        
    );
};

export default Blog;