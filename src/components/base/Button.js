import React from "react";
import { Link } from "gatsby";

function Button({
    width,
    btn_text,
    link,
    bgColor,
    textColor,
    hoverTextColor,
    marginX,
    marginTop,
}) {
    return (
        <button
            className={`w-${width ? width : "full"} mt-10 md:mt-${
                marginTop ? marginTop : 20
            }
            py-2 px-4  rounded border border-black hover:bg-primary hover:border-transparent hover:border-black  bg-${
                bgColor ? bgColor : "transparent"
            }
            text-${textColor ? textColor : "black"}
            hover:text-${hoverTextColor ? hoverTextColor : "black"}
            ${btn_text ? "block" : "hidden"} mx-${marginX ? marginX : "0"}`}
        >
            <Link className="block text-black text-base md:text-2xl" to={link}>
                {btn_text}
            </Link>
        </button>
    );
}

export default Button;
