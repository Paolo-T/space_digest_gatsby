import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import FiftyFifty from "../components/base/FiftyFifty";
import nasa_logo from "../images/nasa_logo.svg";
import img_tile_1 from "../images/img_tile_1.svg";
import img_tile_2 from "../images/img_tile_2.svg";
import spaceXBadge from "../images/spacex-badge.png";
import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import Button from "../components/base/Button";

function IndexPage() {
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
                title="home"
            />
            <TransitionPageIn>
                <div className="md:px-0 mx-auto pt-12">
                    <Hero />

                    <TransitionInview>
                        <FiftyFifty
                            reverse={true}
                            image={nasa_logo}
                            title="Mars Rover"
                            text="Spirit and Opportunity found evidence for past wet conditions that possibly could have supported microbial life."
                            btn_text="Rover pictures from Mars"
                            link="/nasa"
                            padding_img="md:py-8"
                            background={true}
                        />

                        <FiftyFifty
                            image={spaceXBadge}
                            title="SpaceX"
                            text="The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
                            btn_text="More about SpaceX"
                            link="/spacex"
                            padding_img="md:py-8"
                            background={true}
                        />
                    </TransitionInview>

                    <TransitionInview>
                        <div className="bg-secondary py-8 md:py-16 md:px-40 text-center mx-auto mt-6 mb-16 md:mb-0 cursor-pointer">
                            <Link to="/daily">
                                <h2 className="w-10/12 md:w-4/12 mx-auto">
                                    Daily media
                                </h2>
                                {/* <p className="w-10/12 md:w-4/12 mx-auto">
                                    Discovery the beauties of the universe in
                                    our daily astronomy Image or Video
                                </p> */}

                                <Button
                                    link="/daily"
                                    width="32"
                                    btn_text="Here"
                                    marginX="auto"
                                    marginTop="6"
                                />
                            </Link>
                        </div>
                    </TransitionInview>
                    <FiftyFifty
                        image={img_tile_1}
                        title="Asteroids"
                        text=" NeoWs (Near Earth Object Web Service) is a web service for
                    near earth Asteroid information. With NeoWs we can display
                    Asteroids based on their closest approach date to Earth."
                        btn_text="Asteroids nearby"
                        link="/asteroids"
                    />
                    <TransitionInview>
                        <FiftyFifty
                            image={img_tile_2}
                            title="Photo collection"
                            text="Get the latest updates on NASA missions, and learn about the quest to reveal the unknown and benefit all humankind."
                            btn_text="Photos"
                            link="/photos"
                            reverse={true}
                        />
                    </TransitionInview>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default IndexPage;
