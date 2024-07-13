import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faBriefcase, faUserPlus, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const colors = ['#f6e05e', '#fc8181', '#f6ad55', '#b794f4', '#68d391', '#63b3ed'];

const StatCard = ({ stats }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
            <motion.div 
                key={stat.title} 
                className="p-4 flex items-center justify-center shadow-lg rounded-lg mb-4"
                style={{ 
                    backgroundColor: colors[index % colors.length],
                    transition: 'background-color 0.3s ease' // Smooth transition for background color change
                }}
                whileHover={{ scale: 1.05 }} // Scale up on hover effect
            >
                <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md" style={{ width: '80px', height: '80px' }}>
                    <FontAwesomeIcon icon={stat.icon} className="text-4xl text-gray-700" />
                </div>
                <CardContent className="ml-4">
                    <Typography variant="h6" component="div" className="font-semibold text-gray-800">
                        {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div" className="font-bold text-gray-900 mt-2">
                        {stat.count}
                    </Typography>
                </CardContent>
            </motion.div>
        ))}
    </div>
);

export default StatCard;
