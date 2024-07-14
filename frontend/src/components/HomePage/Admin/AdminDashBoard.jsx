import React from 'react';
import StatCard from './StatCard';
import Infographics from './Infographics';
import WelcomeSection from './WelcomeSection';
import { faUser, faUserTie, faBriefcase, faUserPlus, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const AdminDashBoard = () => {
    const data = {
        months: ['January', 'February', 'March', 'April', 'May', 'June'],
        hired: [10, 5, 18, 20, 35, 60],
        applied: [55, 25, 35, 45, 15, 65],
    };

    const stats = [
        { title: 'Admins', count: 5, icon: faUserTie },
        { title: 'Employees', count: 120, icon: faUser },
        { title: 'Jobs Vacant', count: 15, icon: faBriefcase },
        { title: 'New Candidates', count: 10, icon: faUserPlus },
        { title: 'Applicants In Progress', count: 25, icon: faSpinner },
        { title: 'Candidates Rejected', count: 8, icon: faTimesCircle },
    ];

    return (
        <div className="container mx-auto p-4">
            <WelcomeSection />
            <StatCard stats={stats} />
            <Infographics data={data} />
        </div>
    );
};

export default AdminDashBoard;
