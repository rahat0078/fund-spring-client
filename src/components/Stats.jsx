import { useContext } from "react";
import { DarkModeContext } from "../AuthProvider/ThemContext";
import { Link } from "react-router-dom";

const Stats = () => {

    const { theme, } = useContext(DarkModeContext);
    const data = [
        {
            id: "1",
            title: "$10M+",
            des: "Raised by our community",
        },
        {
            id: "2",
            title: "500+",
            des: "Successful campaigns",
        },
        {
            id: "3",
            title: "100K+",
            des: "Supportive backers",
        },
        {
            id: "4",
            title: "50+",
            des: "Countries reached",
        },
    ]


    return (

        <div className={`py-16 text-center ${theme === "light" ? "bg-[#FFFBF8]" : "bg-[#373B40]"}`}>
            <h2 className="md:text-4xl text-2xl font-bold mb-4">Together, We’re Making a Difference</h2>
            <p className="text-lg text-gray-400 mb-10">
                See how your support has contributed to real impact worldwide.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {
                    data.map((i) => <div key={i.id} className="flex flex-col items-center p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition">
                        <span className="text-6xl font-extrabold">{i.title}</span>
                        <p className="text-gray-600 text-lg mt-2">{i.des}</p>
                    </div>)
                }
                {/* Stat 1 */}


            </div>
            <div className="mt-8">
                <Link
                    to={"/addCampaign"}
                    className="btn btn-outline text-[#FD7E14] border-[#FD7E14] hover:border-[#FD7E14] rounded hover:bg-[#FD7E14] text-lg">
                    Start a Campaign
                </Link>
            </div>
        </div>

    );
};

export default Stats;