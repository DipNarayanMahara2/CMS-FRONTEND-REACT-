
import { Link } from "react-router-dom";

const Cards = ({ blog }) => {

    return (
        <article className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-96 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                    className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1496436818536-e239445d3327?q=80&w=1200"
                    alt="A growing plant symbolizing investment and seed funding"
                />
            </div>
            <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {blog.title}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                    {blog.description.length > 50
                        ? `${blog.description.slice(0, 50)}....`
                        : blog.description}
                </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
                <Link to='/blog/:id'
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Read article
                </Link>
            </div>
        </article>
    );
};

export default Cards;
