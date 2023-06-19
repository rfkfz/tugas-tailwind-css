import React from 'react';

const Card = ({ title, content }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className={`bg-white rounded-lg shadow-lg p-6 mb-4 flex flex-col items-center justify-center transform ${isHovered ? 'scale-105' : 'scale-100'
                } transition-transform duration-300`}
            onMouseEnter={() => setIsHovered(!isHovered)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className="text-3xl font-waterfall font-semibold text-gray-800 mb-2 text-center">{title}</h2>
            <p className="text-gray-600 text-center">{content}</p>
            <button className="bg-purple-600 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Read More
            </button>
        </div>
    );
};

export default Card;
