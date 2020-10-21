import React from "react";
import VideoFeatured from "./base/VideoFeatured";
import TransitionInview from "./TransitionInview";
import logo from "../images/logo.svg";

function Header() {
    return (
        <section
            className="mx-auto mb-8 md:mb-24 pt-6 md:py-10 mt-8 text-center"
            style={{ backgroundColor: "#f4f0ea" }}
        >
            <div className="w-9/12 md:w-7/12 mx-auto">
                <h1 className="tracking-snug md:text-9xl text-5xl mb-4">
                    Space Digest
                </h1>
                <h3 className="w-9/12 md:w-10/12 mx-auto md:leading-tight mb-4">
                    Discover the beauties of the Universe
                </h3>
            </div>
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
