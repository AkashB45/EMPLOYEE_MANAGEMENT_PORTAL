import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement, LineController, BarController, Filler } from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  LineController,
  BarController,
  Filler
);

const AdminDashboard = () => {
  const [selectedCard, setSelectedCard] = useState('Department 1');

  const departments = [
    { name: 'Department 1', vacancy: 10, applicants: 50, selected: 7, rejected: 43 },
    { name: 'Department 2', vacancy: 5, applicants: 20, selected: 3, rejected: 17 },
    { name: 'Department 3', vacancy: 2, applicants: 25, selected: 2, rejected: 23 },
    { name: 'Department 4', vacancy: 6, applicants: 100, selected: 5, rejected: 95 },
  ];

  const departmentData = departments.find(dep => dep.name === selectedCard);

  const pieData = {
    labels: ['Vacancy', 'Applicants', 'Selected', 'Rejected'],
    datasets: [{
      data: [departmentData.vacancy, departmentData.applicants, departmentData.selected, departmentData.rejected],
      backgroundColor: ['#FFCE56', '#36A2EB', 'lightgreen', '#FF6384'],
    }]
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 10
      }
    }
  };

  const barData = {
    labels: ['Frontend', 'Testing', 'Designing', 'Quality Assurance', 'Backend'],
    datasets: [{
      label: 'Number of Users',
      data: [14, 5, 8, 3, 16],
      backgroundColor: '#088395', // Updated color here
      borderColor: '#071952', // Updated color here
      borderWidth: 1,
    }]
  };

  const barOptions = {
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Department',
          color: '#071952', // Title color
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Number of Employees',
          color: '#071952', // Title color
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 10
      }
    }
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Number of Hires',
      data: [5, 10, 8, 15, 20, 25, 30],
      fill: true,
      backgroundColor: 'rgba(55, 183, 195, 0.2)', // Region color below line
      borderColor: '#37B7C3',
      borderWidth: 2,
    }]
  };

  const lineOptions = {
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Month',
          color: '#071952', // Title color
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Number of Hires',
          color: '#071952', // Title color
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 10
      }
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="font-bold text-3xl text-center mb-8 text-[#071952]">ADMIN DASHBOARD</h1>
      <Row className="mb-8">
        {departments.map((department, index) => (
          <Col key={department.name} md={3} sm={6} xs={12} className="mb-4">
            <Card
              className={`cursor-pointer transform transition-transform duration-300 hover:scale-105 ${index === 3 ? 'bg-[#071952]' : 'bg-[#37B7C3]'} text-white rounded-lg shadow-lg`}
              onClick={() => setSelectedCard(department.name)}
              style={{ height: index === 3 ? '200px' : '190px' }} // Increased height for the fourth card
            >
              <Card.Body className="text-center">
                <Card.Title className="text-lg font-semibold mb-2 text-white">{index === 3 ? 'Past Record' : department.name}</Card.Title>
                <Card.Text className="text-sm mb-2 text-gray-100">
                  <strong>Vacancy:</strong> {department.vacancy}
                </Card.Text>
                <Card.Text className="text-sm mb-2 text-gray-100">
                  <strong>Applicants:</strong> {department.applicants}
                </Card.Text>
                <Card.Text className="text-sm mb-2 text-gray-100">
                  <strong>Selected:</strong> {department.selected}
                </Card.Text>
                <Card.Text className="text-sm mb-2 text-gray-100">
                  <strong>Rejected:</strong> {department.rejected}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mb-8">
        <Col md={6} sm={12}>
          <div className="w-full h-64">
            <h2 className="text-lg font-bold mb-4 text-center text-[#071952]">Batch Info</h2>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="w-full h-64">
            <br></br><br></br>
            <h2 className="text-lg font-bold mb-4 text-center text-[#071952]">User Distribution</h2>
            <Bar data={barData} options={barOptions} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="w-full h-96">
          <br></br><br></br>
            <h2 className="text-lg font-bold mb-4 text-center text-[#071952]">Hiring Distribution</h2>
            <Line data={lineData} options={lineOptions} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
