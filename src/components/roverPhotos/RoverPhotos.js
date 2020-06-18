import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../base/Loader";
import Moment from "react-moment";
import chunkArray from "../../utils/chunkArray";
import Pagination from "../base/Pagination";
import Photos from "./Photos";
import { SRLWrapper } from "simple-react-lightbox";

const PHOTOS_PER_PAGE = 15;
const START_ON_PAGE_NUMBER = 1;

function RoverPhotos() {
    const [currentPage, setCurrentPage] = useState(START_ON_PAGE_NUMBER);
    const [photosToDisplay, setPhotosToDisplay] = useState();

    const API_KEY = "api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN";
    const API_BASE_URL = "https://api.nasa.gov/mars-photos/api/v1";
    const ROVER_NAME = "curiosity";
    const RANDOM_SOL = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const CAMERA = "NAVCAM";

    const res = useFetch(
        `${API_BASE_URL}/rovers/${ROVER_NAME}/photos?sol=${RANDOM_SOL(
            1,
            2764
        )}&camera=navcam&${API_KEY}`,
        {}
    );
    // console.log("Photos fetched! --->>>", res.response);

    // Fetch Manifest and filter the ones with NAVCAM
    const manifests = useFetch(
        "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=24TE7EgNfmXIvdb6vNNZGBWx8s54XbZzCCi2oAdN"
        // `${API_BASE_URL}manifests/${ROVER_NAME}?${API_KEY}`
    );
    console.log("Manifest", manifests.photo_manifest);

    // const manifestPhotos = manifests.response.photo_manifest
    //     .map((manifest_photo) => {
    //         return {
    //             sol: manifest_photo.sol,
    //             earth_date: manifest_photo.earth_date,
    //             photos: manifest_photo.total_photos,
    //             cameras: (manifest_photo.cameras = CAMERA),
    //         };
    //     })
    //     .filter((manifest_photo) => {
    //         return manifest_photo.cameras.includes(CAMERA);
    //     });

    // console.log("photoManifest", manifestPhotos);

    useEffect(() => {
        if (res.response) {
            setPhotosToDisplay(
                chunkArray(
                    res.response.photos.filter((item) =>
                        item.camera.name.includes("NAVCAM")
                    ),
                    PHOTOS_PER_PAGE
                )
            );
        }
    }, [res.response]);

    function renderPhotoPage(pageIndex) {
        return (
            <SRLWrapper>
                <Photos items={photosToDisplay[pageIndex]} key={pageIndex} />
            </SRLWrapper>
        );
    }

    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    const photoData = JSON.parse(JSON.stringify(res.response));

    // console.log("photoData", photoData);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            {photosToDisplay ? (
                <div>
                    <div className="md:flex justify-between items-end">
                        <div className="md:px-8 md:w-7/12 mx-auto text-center md:text-left">
                            <h2 className="mb-6 font-bold">
                                Mars Rover Images
                            </h2>
                            <p className="">
                                Select your favourite Mars Rover and cameras to
                                display images from Mars
                            </p>
                        </div>

                        <div className="flex-grow flex justify-evenly md:justify-end">
                            <Pagination
                                numberOfPages={photosToDisplay.length}
                                onPageChange={changePage}
                                activePageNumber={currentPage}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-secondary px-12 py-10 rounded-md mb-6 mt-12 text-center z-0">
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Rover name:{" "}
                            </span>
                            <span className="block text-xl">
                                {res.response.photos[0].rover.name}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Mars Sol:{" "}
                            </span>
                            <span className="block text-xl">
                                {res.response.photos[0].sol}
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Earth Date:{" "}
                            </span>
                            <span className="block text-xl">
                                <Moment format="DD/MM/YYYY">
                                    {res.response.photos[0].earth_date}
                                </Moment>
                            </span>
                        </div>

                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Launch Date:{" "}
                            </span>
                            <span className="block text-xl">
                                <Moment format="DD/MM/YY">
                                    {res.response.photos[0].rover.launch_date}
                                </Moment>
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Landing Date:{" "}
                            </span>
                            <span className="block text-xl">
                                <Moment format="DD/MM/YY">
                                    {res.response.photos[0].rover.landing_date}
                                </Moment>
                            </span>
                        </div>
                        <div>
                            <span className="block uppercase text-sm text-gray-700">
                                Status:{" "}
                            </span>
                            <span className="block text-xl">
                                {capitalizeFirstLetter(
                                    res.response.photos[0].rover.status
                                )}
                            </span>
                        </div>
                    </div>

                    {renderPhotoPage(currentPage - 1)}
                </div>
            ) : (
                <div className="container mx-auto h-screen text-center">
                    <Loader className="inline-block text-xl" />
                </div>
            )}
        </>
    );
}
export default RoverPhotos;
