import React from "react";
import SEO from "../components/seo";
import SpacexPatches from "../components/SpacexPatches/SpacexPatches";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function Spacex() {
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
                                SpaceX
                            </h1>
                        </div>
                    </div>
                    <div className="px-8 md:w-9/12 mx-auto mb-10 mt-0 md:mt-20">
                        <div className="md:container mx-auto md:flex mt-16 md:mt-32 mb-12 md:mb-24 border-b border-gray-400 text-left">
                            <p className="md:w-4/12 line-block flex-1 md:mb-8 md:mx-auto text-lg font-bold uppercase">
                                SpaceX
                            </p>

                            <p className="md:w-7/12 mb-10 mx-auto">
                                <p className=" pt-4 mr-10">
                                    HQ: Hawthorne - California | Address: Rocket
                                    Road
                                </p>
                                SpaceX designs, manufactures and launches
                                advanced rockets and spacecraft. The company was
                                founded in 2002 to revolutionize space
                                technology, with the ultimate goal of enabling
                                people to live on other planets.
                                <p className=" pt-4 mr-10">
                                    HQ: Hawthorne - California | Address: Rocket
                                    Road
                                </p>
                            </p>
                        </div>
                    </div>

                    <TransitionInview>
                        <SpacexPatches />
                    </TransitionInview>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Spacex;
