import React from "react";
import { Link } from "gatsby";

function Card({ image, link, key, title, tag1, tag2, tag3 }) {
    return (
        <div
            key={key}
            className="h-full bg-gray-100 rounded overflow-hidden border-2 hover:border-primary text-center"
        >
            <Link to={link}>
                <div
                    className="w-full h-32 md:h-48 mt-10 md:my-20"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                {/* <img
                    className="w-full py-12 px-12"
                    effect="blur"
                    src={image}
                    alt="Sunset in the mountains"
                /> */}
                <div className="w-full">
                    <p className="font-bold text-2xl mb-2 text-gray-700 text-left pb-4 px-8">
                        {title}
                    </p>

                    <div className="flex h-16 justify-between bg-gray-200 px-6 py-4">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            Launch {tag1}
                        </span>
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700">
                            {tag2}
                        </span>
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            {tag3}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
