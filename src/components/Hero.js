import React from "react";
import VideoFeatured from "./base/VideoFeatured";
import TransitionInview from "./TransitionInview";
import logo from "../images/logo.svg";
import img_tile_2 from "../images/img_tile_2.svg";

function Header() {
    return (
        <section className="smx-auto mb-8 md:mb-24 pt-10 pb-10 mt-2 md:mt-10 text-center flex md:px-56 bg-primary">
            <div className="flex-1 mx-auto">
                <h1 className="tracking-snug text-5xl md:text-8xl mb-4">
                    Space Digest
                </h1>
                <h3 className="md:leading-tight mb-4">
                    Discover the beauties of the Universe
                </h3>
            </div>
            {/* <img className="w-100" src={img_tile_2} alt="spacex misson patch" /> */}
            {/* <TransitionInview>
                <VideoFeatured
                    width="62vw"
                    height="35vw"
                    url="https://www.youtube.com/watch?v=Ilifg26TZrI"
                    className={"mx-auto mb-20 bg-black"}
                />
            </TransitionInview> */}
            {/* <h3 className="w-9/12 md:w-10/12 mx-auto md:leading-tight mb-4">
                ”Space is for everybody. It's not just for a few people in
                science or math, or for a select group of astronauts. That's our
                new frontier out there, and it's everybody's business to know
                about space.”
            </h3>
            <span className="span text-xs md:text-base text-gray-600 mt-0 mb-8 md:mb-16">
                CHRISTA MCAULIFFE, 1985
            </span> */}
        </section>
    );
}

export default Header;
