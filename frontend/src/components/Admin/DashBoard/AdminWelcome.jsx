import React, { useEffect, useState, useRef, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import './AdminWelcome.css';
import { CSSTransition } from 'react-transition-group';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminWelcome = () => {
  const imgRefs = useRef([]);
  const featureCardRefs = useRef([]);
  const stepCardRefs = useRef([]);
  const [stepInView, setStepInView] = useState([false, false, false, false]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    imgRefs.current.forEach(ref => observer.observe(ref));
    featureCardRefs.current.forEach(ref => observer.observe(ref));
    stepCardRefs.current.forEach(ref => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const handleIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        if (stepCardRefs.current.includes(entry.target)) {
          const index = stepCardRefs.current.indexOf(entry.target);
          setStepInView(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      } else {
        entry.target.classList.remove('animate');
      }
    });
  };

  const StepCard = ({ number, title, description, buttonText, buttonVariant, inView, linkTo }) => (
    <Col md={6} className={`mb-5 ${inView ? 'pulse' : ''}`} ref={ref => stepCardRefs.current.push(ref)}>
      <Card className="step-card p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-info mb-3">{number}: {title}</h3>
        <p className="text-muted">{description}</p>
        <Link to={linkTo}>
          <div className="text-center mt-4">
            <Button variant={buttonVariant} className="py-2 px-4 rounded-lg shadow-lg">{buttonText}</Button>
          </div>
        </Link>
      </Card>
    </Col>
  );

  return (
    <>
      <Navbar expand="lg" sticky="top" className="shadow-sm"
        style={{ zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', color: '#071952', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Container>
          <Navbar.Brand href="#home" style={{ color: '#071952', marginLeft: '5rem' }}>OnBoardMaster</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaAngleDown style={{ color: '#071952' }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-end align-items-center w-100"
              style={{ color: '#071952', marginRight: '4rem' }}>
              <Nav.Link href="#welcome" style={{ color: '#071952', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>Welcome</Nav.Link>
              <Nav.Link href="#ready-to-start" style={{ color: '#071952', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>Start</Nav.Link>
              <Nav.Link href="#major-functionality" style={{ color: '#071952', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>Functionality</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-2">
        <Card className="p-4 shadow-lg rounded-lg">
          <Row id="welcome">
            {/* Welcome Section */}
              <CSSTransition in appear timeout={500} classNames="fade">
                <div className="welcome-text text-center">
                  <h1 className="text-primary mb-3">Welcome to OnBoardMaster, Admin!</h1>
                  <p className="">Let's Get Started with Your Admin Dashboard</p>
                </div>
              </CSSTransition>
           
            </Row>

          <div className="mt-5 mb-5" id="ready-to-start">
            <h2 className="section-title text-center mb-4">Ready to Start?</h2>
            <Row className="mb-5">
              <StepCard
                number="Step 1"
                title="Set Up Your Profile"
                description="Effortlessly set up your profile with our intuitive process, ensuring security and tailored customization."
                buttonText="Set Profile"
                buttonVariant="outline-primary"
                linkTo="/profile"
                inView={stepInView[0]}
              />
              <StepCard
                number="Step 2"
                title="Batch Management"
                description="Efficiently manage multiple user batches for seamless organization and control, ensuring optimal efficiency and data integrity."
                buttonText="Create Batches"
                buttonVariant="outline-primary"
                linkTo="/UserRegisteration"
                inView={stepInView[1]}
              />
            </Row>
            <Row className="mb-5">
              <StepCard
                number="Step 3"
                title="User Management"
                description="Simplify user creation, modification, and removal with defined roles and permissions."
                buttonText="Create Users"
                linkTo="/UserRegisteration"
                buttonVariant="outline-primary"
                inView={stepInView[2]}
              />
              <StepCard
                number="Step 4"
                title="Trace the Progress"
                description="Track applicant interview statuses to monitor their progress through the hiring process and make informed decisions based on detailed feedback."
                buttonText="Monitor"
                buttonVariant="outline-primary"
                linkTo="/InterviewProgress"
                inView={stepInView[3]}
              />
            </Row>
          </div>

         {/* Major Functionality Section */}
         <div className="mt-5" id="major-functionality">
            <h2 className="section-title text-center mb-4">Major Functionality</h2>
            <Row className="mb-8 md:flex md:mb-3 align-items-center">
              <Col md={6} order={1}>
                <div
                  ref={ref => featureCardRefs.current.push(ref)}
                  className="feature-card p-4 bg-white rounded-lg shadow-lg animate__animated animate__fadeInLeft transition duration-500 hover:bg-gray-100 hover:shadow-md"
                >
                  <h4 className="text-secondary mb-3 font-bold transition duration-300 hover:text-blue-600">
                    Easy Administration
                  </h4>
                  <p className="text-muted">
                    Effortlessly create new user accounts tailored to specific roles and permissions. Automate the generation of unique passwords and send email notifications seamlessly. Simplify administrative tasks with our intuitive user creation feature, ensuring efficient management of access and security. Streamline your workflow and enhance user onboarding with automated processes that save time and ensure accuracy
                  </p>
                </div>
              </Col>
              <Col md={6} order={2} className="md:order-2">
                <img
                  ref={ref => imgRefs.current.push(ref)}
                  src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1720767942~exp=1720771542~hmac=2a6bdaa5ea67c0a817f21d73fcf1b3a2022afa9a93caf6f420df1e07b8995495&w=740"
                  alt="User Creation"
                  className="img-fluid rounded-lg shadow-lg img-small animate__animated animate__zoomIn"
                />
              </Col>
            </Row>

            {/* Applicant Tracking */}
            <Row className="mb-8 md:flex md:mb-3 align-items-center">
              <Col md={6}>
                <img
                  ref={ref => imgRefs.current.push(ref)}
                  src="https://img.freepik.com/free-vector/statistical-data-research-company-performance-indicators-return-investment-percentage-ratio-indexes-fluctuation-significative-change_335657-1165.jpg?t=st=1720768015~exp=1720771615~hmac=f3da1cdcad73d9b15790489d94b44e5e3fc678195335b01247fbeaffd46e2b74&w=740"
                  alt="Applicant Tracking"
                  className="img-fluid rounded-lg shadow-lg img-small animate__animated animate__zoomIn"
                />
              </Col>
              <Col md={6} className="md:order-2">
                <div
                  ref={ref => featureCardRefs.current.push(ref)}
                  className="feature-card p-4 bg-white rounded-lg shadow-lg animate__animated animate__fadeInRight transition duration-500 hover:bg-gray-100 hover:shadow-md"
                >
                  <h4 className="text-secondary mb-3 font-bold transition duration-300 hover:text-blue-600">
                    Applicant Tracking
                  </h4>
                  <p className="text-muted">
                    Track the progress of each job applicant seamlessly with our comprehensive tool. Record interview schedules, capture valuable feedback, and document hiring decisions—all in one centralized location. Stay informed with real-time updates on applicant statuses, ensuring efficient and well-informed hiring processes. Simplify your workflow and enhance decision-making with our integrated applicant tracking solution
                  </p>
                </div>
              </Col>
            </Row>

            {/* Job Listings */}
            <Row className="mb-8 md:flex md:mb-3 align-items-center">
              <Col md={6} order={1}>
                <div
                  ref={ref => featureCardRefs.current.push(ref)}
                  className="feature-card p-4 bg-white rounded-lg shadow-lg animate__animated animate__fadeInLeft transition duration-500 hover:bg-gray-100 hover:shadow-md"
                >
                  <h4 className="text-secondary mb-3 font-bold transition duration-300 hover:text-blue-600">Job Listings</h4>
                  <p className="text-muted">
                    Keep an updated repository of available job positions effortlessly. Share comprehensive job details with potential candidates and internal teams to facilitate informed decisions. Ensure transparency and accessibility with our centralized job listing feature. Streamline recruitment processes and enhance communication across your organization with our intuitive job listing management solution.
                  </p>
                </div>
              </Col>
              <Col md={6} order={2} className="md:order-2">
                <img
                  ref={ref => imgRefs.current.push(ref)}
                  src="https://img.freepik.com/free-vector/checklist-concept-illustration_114360-479.jpg?t=st=1720768125~exp=1720771725~hmac=61707aa63039517e34250cdfc4a9fcec9a72572201d64fb580deb7b9a5dfded7&w=740"
                  alt="Job Listings"
                  className="img-fluid rounded-lg shadow-lg img-small animate__animated animate__zoomIn"
                />
              </Col>
            </Row>

            {/* List of Applicants */}
            <Row className="mb-8 md:flex md:mb-3 align-items-center">
              <Col md={6}>
                <img
                  ref={ref => imgRefs.current.push(ref)}
                  src="https://img.freepik.com/free-vector/illustration-choice-worker-concept_52683-43239.jpg?t=st=1720768111~exp=1720771711~hmac=54271a003397b3b552a685cee4b03d09ff8c8b1ee3a873b88c76261045c3667c&w=996"
                  alt="List of Applicants"
                  className="img-fluid rounded-lg shadow-lg img-small animate__animated animate__zoomIn"
                />
              </Col>
              <Col md={6} className="md:order-2">
                <div
                  ref={ref => featureCardRefs.current.push(ref)}
                  className="feature-card p-4 bg-white rounded-lg shadow-lg animate__animated animate__fadeInLeft transition duration-500 hover:bg-gray-100 hover:shadow-md"
                >
                  <h4 className="text-secondary mb-3 font-bold transition duration-300 hover:text-blue-600">
                    Applicants Info
                  </h4>
                  <p className="text-muted">
                    Maintain a detailed record of each applicant who has applied for a job, including their full name, email address, contact number, and current application status (shortlisted, accepted, rejected). Store resumes securely alongside applicant information for easy access and review. Streamline your hiring process by tracking applicant statuses and managing communication effectively. Ensure comprehensive candidate management with our centralized applicant tracking system.
                  </p>
                </div>
              </Col>
            </Row>

            {/* Contact Support */}
            <Row className="mb-8 md:flex md:mb-3 align-items-center">
              <Col md={6} order={1}>
                <div
                  ref={ref => featureCardRefs.current.push(ref)}
                  className="feature-card p-4 bg-white rounded-lg shadow-lg animate__animated animate__fadeInLeft transition duration-500 hover:bg-gray-100 hover:shadow-md"
                >
                  <h3 className="text-secondary mb-3 font-bold transition duration-300 hover:text-blue-600">Contact Support</h3>
                  <p className="text-muted">
                    Feel free to reach out to our dedicated support team for comprehensive assistance with any questions or concerns you may have. Our highly trained staff is available via email or phone to provide personalized support and resolve issues promptly. We prioritize your satisfaction and strive to make your experience with us seamless and enjoyable. Trust us to deliver reliable solutions and ensure your needs are met with the utmost care and efficiency.
                  </p>
                </div>
              </Col>
              <Col md={6} order={2} className="md:order-2">
                <img
                  ref={ref => imgRefs.current.push(ref)}
                  src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148890148.jpg?t=st=1720797778~exp=1720801378~hmac=27b697ff7403a22b61782f81cefb5b53d648357b5194523450ec7610202c1415&w=740"
                  alt="Contact Support"
                  className="img-fluid rounded-lg shadow-lg img-small animate__animated animate__zoomIn"
                />
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default AdminWelcome;
