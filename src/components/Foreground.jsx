import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);

    const cardData = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nihil!",
            fileSize: "0.9 Mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            id: 2,
            desc: "This is just the 2nd card.",
            fileSize: "0.8 Mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            id: 3,
            desc: "This is just the 3rd card.",
            fileSize: "0.8 Mb",
            close: false,
            tag: { isOpen: false },
        },
        {
            id: 4,
            desc: "4th Card",
            fileSize: "1 Mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "red" },
        },
    ];

    return (
        <>
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap flex-col items-center justify-center gap-5 sm:flex sm:justify-start sm:items-start sm:flex-row flex-shrink-0">
                {cardData.map((item) => {
                    return <Card key={item.id} data={item} reference={ref} />;
                })}
            </div>
        </>
    );
};

export default Foreground;
