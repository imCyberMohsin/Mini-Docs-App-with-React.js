import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
    return (
        <>
            <motion.div
                drag
                dragConstraints={reference}
                whileDrag={{ scale: 1.1 }}
                dragElastic={0.2}
                dragTransition={{bounceStiffness: 600, bounceDamping: 15}}
                className="card relative w-48 h-60 m-5 bg-zinc-900 rounded-[40px] text-white overflow-hidden"
            >
                <div className="p-6">
                    <FaFileAlt />
                    <p className="text-sm leading-tight mt-3">{data.desc}</p>
                </div>
                <div className="card-footer absolute bottom-0 w-full text-center font-semibold text-lg text-zinc-100">
                    <div className="flex py-4 gap-5 items-center justify-between px-7">
                        <h6 className="size text-sm">{data.fileSize}</h6>
                        {data.close ? <IoIosClose /> : <MdDownloadForOffline />}
                    </div>
                    {data.tag.isOpen && (
                        <div
                            className={`py-3 ${
                                data.tag.tagColor === "blue"
                                    ? "bg-blue-500"
                                    : data.tag.tagColor === "green"
                                    ? "bg-green-500"
                                    : data.tag.tagColor === "red"
                                    ? "bg-red-500"
                                    : "bg-white"
                            }`}
                        >
                            <h3 className="text-md">{data.tag.tagTitle}</h3>
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    );
};

export default Card;
