(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1u7p":function(e,t,a){e.exports=a.p+"static/asteroid-194f7ffd8bbc25a0e2e9ca443a44f3a1.jpg"},IvSh:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),m=a.n(s),l=a("Bl7J"),r=a("vrFN"),n=(a("f3/d"),a("1qly")),c=a("19Cd"),o=a("k7N+"),i=a.n(o);var d=function(){var e=Object(n.a)("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY&api_key=DEMO_KEY",{});if(console.log("Asteroids fetched! ---\x3e>>",e),!e.response)return m.a.createElement("div",{className:"container mx-auto text-center"},m.a.createElement(c.a,{className:"inline-block"}));var t=e.response.near_earth_objects;console.log(t);var a=t[0].close_approach_data[0].miss_distance;return console.log("TEST--\x3e",a),m.a.createElement("div",{className:"container mx-auto text-left mb-12 md:pt-12"},m.a.createElement("h2",{className:"md:w-74 bg-teal-300 mb-8 md:mb-0"},"Passing close to Earth"),m.a.createElement("div",{className:"mx-auto pr-30 pb-10 md:mt-10"},m.a.createElement("div",{className:"flex pt-4 md:pl-4"},m.a.createElement("span",{className:"w-1/4 font-bold text-xxs md:text-sm"},"Name"),m.a.createElement("span",{className:"w-1/4 font-bold text-xxs md:text-sm"},"Approach Date"),m.a.createElement("span",{className:"w-1/4 font-bold text-xxs md:text-sm"},"Diameter (Km)"),m.a.createElement("span",{className:"w-1/4 font-bold text-xxs md:text-sm"},"Speed (Km/second)"),m.a.createElement("span",{className:"w-1/4 font-bold text-xxs md:text-sm"},"Distance from Earth (km)")),m.a.createElement("div",{className:"mx-auto pt-5 text-1xl font-light "},t.map((function(e){return m.a.createElement("ul",{className:"flex mb-3"},m.a.createElement("li",{className:"w-1/5 bg-gray-100 h-10 md:h-12 pl-2 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm",key:e.id},e.name),m.a.createElement("li",{className:"w-1/5 h-10 sm:h-12 pl-3 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm",key:e.id}," ",m.a.createElement(i.a,{format:"DD/MM/YYYY"},e.approach_date)),m.a.createElement("li",{className:"w-1/5 bg-gray-100 h-10 sm:h-12 pl-2 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm",key:e.id},e.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)))})))))},p=a("1u7p"),x=a.n(p),E=a("wEEd");t.default=function(){var e=Object(E.b)({opacity:1,from:{opacity:0}});return m.a.createElement(l.a,null,m.a.createElement(r.a,{keywords:["Nasa","Spacex","Space","star","gatsby","tailwind","react","tailwindcss"],title:"Nasa"}),m.a.createElement(E.a.div,{style:e,className:"container mx-auto pt-24"},m.a.createElement("div",{className:"md:w-9/12 mx-auto text-center"},m.a.createElement("h1",{className:"mb-3"},"Asteroids"),m.a.createElement("h3",{className:"md:w-3/5 mx-auto md:leading-tight mb-1"},"NeoWs (Near Earth Object Web Service) is a web service for near earth Asteroid information. With NeoWs we can display Asteroids based on their closest approach date to Earth.",m.a.createElement("a",{className:"block text-black text-base md:text-2xl  pt-6 md:pt-10",target:"_blank",rel:"noopener noreferrer",href:"https://cneos.jpl.nasa.gov/"},"CNEOS - Center for Near Earth Object Studies")),m.a.createElement("img",{className:"w-full bg-gray-200 mt-10 sm:mt-12 mb-16 md:mb-32",src:x.a,alt:"Asteroid"}),m.a.createElement(d,null))))}}}]);
//# sourceMappingURL=component---src-pages-asteroids-js-88761986fda1c3e9a295.js.map