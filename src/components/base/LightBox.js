import React from "react";

function LightBoxOptions() {
    const options = {
        settings: {
            overlayColor: "rgb(25, 136, 124)",
            autoplaySpeed: 1500,
            transitionSpeed: 900,
        },
        buttons: {
            backgroundColor: "#1b5245",
            iconColor: "rgba(126, 172, 139, 0.8)",
            paddingLeft: "400px",
        },
        caption: {
            captionColor: "#a6cfa5",
            captionFontFamily: "Avenir, sans-serif",
            captionFontWeight: "300",
            captionTextTransform: "uppercase",
        },
    };
    return options;
}

export default LightBoxOptions;
