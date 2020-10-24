import React from "react";
import SEO from "../components/seo";
import PhotoCollection from "../components/PhotoCollection/PhotoCollection";
import { useSpring, animated } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";

function Page__photosPage() {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <>
            <SEO
                keywords={[
                    `Nasa`,
                    `Spacex`,
                    `Space`,
                    `star`,
                    `gatsby`,
                    `tailwind`,
                    `react`,
                    `tailwindcss`,
                ]}
                title="Nasa"
            />

            <TransitionPageIn>
                <div className="mx-auto pt-12 md:pt-24">
                    <div className="py-10 bg-primary">
                        <div className="w-9/12 mx-auto text-center">
                            <h1 className="tracking-snug text-5xl md:text-7xl mb-4">
                                Photo collection
                            </h1>
                        </div>
                    </div>

                    <div className="w-10/12 md:w-9/12 mx-auto md:flex mt-16 md:mt-32 mb-0 md:mb-24 border-b border-gray-400 text-left pb-10">
                        <p className="md:w-4/12 line-block flex-1 md:mx-auto text-lg font-bold uppercase mb-4 m:mb-0">
                            Mars rovers
                        </p>
                        <p className="md:w-3/5 mx-auto md:leading-tight">
                            NASA.gov brings you the latest images, videos and
                            news from America's space agency. Get the latest
                            updates on NASA<br></br>missions, and learn about
                            the quest to reveal the unknown and benefit all
                            humankind.
                        </p>
                    </div>

                    <div className="container">
                        <div className="w-full mx-auto mb-32 mt-6 md:mt-20">
                            <PhotoCollection />
                        </div>
                    </div>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Page__photosPage;
