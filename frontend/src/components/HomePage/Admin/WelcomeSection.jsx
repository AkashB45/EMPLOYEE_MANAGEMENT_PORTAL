import React, { useState, useEffect } from 'react';

const WelcomeSection = () => {
    const [typedText, setTypedText] = useState('');
    const welcomeMessage = "Welcome to OnBoardMaster Admin Dashboard!";
    const typingSpeed = 100; // Adjust typing speed in milliseconds

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= welcomeMessage.length) {
                setTypedText(welcomeMessage.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="my-8 p-6 bg-white shadow-md rounded-lg">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-4">
                    {typedText}
                </h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                    Manage your employee onboarding process with ease. Get insights, track applications, and more.
                </p>
            </div>
        </div>
    );
};

export default WelcomeSection;
