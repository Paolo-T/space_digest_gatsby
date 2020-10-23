import React, { useState } from "react";
import SEO from "../components/seo";
import { useSpring, animated } from "react-spring";
import RoverPhotos from "../components/roverPhotos/RoverPhotos";
import nasa_logo from "../images/nasa_logo.svg";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import { SRLWrapper } from "simple-react-lightbox";
// import curiosityRover from "../images/curiosityRover.jpg";
// import MarsWeather from "../../components/MarsWeather";

function Nasa() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } }); //Fade animation

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
                <div className="mx-auto pt-20 md:pt-24">
                    <div className="py-10 bg-primary">
                        <div className="w-9/12 mx-auto text-center">
                            <h1 className="tracking-snug text-5xl md:text-7xl mb-4">
                                NASA
                            </h1>
                        </div>
                    </div>

                    <div className="px-8 md:w-9/12 mx-auto mb-10 mt-0 md:mt-20">
                        {/* <MarsWeather /> */}
                        <TransitionInview>
                            <div className="w-11/12 mx-auto md:flex mt-16 md:mt-32 mb-12 md:mb-10 text-left">
                                <p className="md:w-4/12 line-block flex-1 md:mb-8 md:mx-auto text-lg font-bold uppercase">
                                    Nasa
                                </p>
                                <p className="md:w-8/12 mb-1 mx-auto">
                                    The National Aeronautics and Space
                                    Administration (NASA) is an independent
                                    agency of the United States Federal
                                    Government responsible for the civilian
                                    space program, as well as aeronautics and
                                    aerospace research.
                                </p>
                            </div>
                            <div className="w-11/12 mx-auto md:flex mt-16 md:mt-32 mb-12 md:mb-24 border-b border-gray-400 text-left">
                                <p className="md:w-4/12 line-block flex-1 md:mb-8 md:mx-auto text-lg font-bold uppercase">
                                    Mars rovers
                                </p>

                                <p className="md:w-8/12 mb-10 mx-auto">
                                    Spirit and Opportunity landed on Mars
                                    January 3 and January 24, 2004 PST (Jan. 4
                                    and Jan. 25 UTC). Both rovers lived well
                                    beyond their planned 90-day missions. Spirit
                                    and Opportunity found evidence for past wet
                                    conditions that possibly could have
                                    supported microbial life.
                                </p>
                            </div>
                        </TransitionInview>

                        <TransitionInview>
                            <RoverPhotos />
                        </TransitionInview>
                    </div>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Nasa;
