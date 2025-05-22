import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <section id="careers" className="careers-section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="section-title">Join Our Team</h2>
          <p className="section-subtitle">
            We're always looking for talented individuals to join our team. Explore our current openings and grow with us.
          </p>
        </div>

        <div className="job-grid">
          {jobList.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-location">{job.location}</p>
                </div>
                {job.isNew && (
                  <span className="job-new">New</span>
                )}
              </div>
              <p className="job-description">{job.description}</p>
              <div className="job-tags">
                {job.tags.map((tag, idx) => (
                  <span key={idx} className="job-tag">{tag}</span>
                ))}
              </div>
              <Link to="#" className="view-details">
                View details <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center contact-cta">
          <p className="section-subtitle">Don't see a position that matches your skills? We're always interested in hearing from talented individuals.</p>
          <Link to="/#contact" className="contact-button">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

const jobList = [
  {
    title: 'Senior Data Analyst',
    location: 'Full-time • Paris, France',
    description: 'We\'re looking for an experienced Data Analyst to join our team. The ideal candidate will have strong analytical skills and experience with data visualization tools.',
    tags: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
    isNew: true,
  },
  {
    title: 'Frontend Developer',
    location: 'Full-time • Paris, France',
    description: 'We\'re seeking a talented Frontend Developer to create responsive and user-friendly web applications. The ideal candidate will have experience with modern JavaScript frameworks.',
    tags: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
    isNew: false,
  },
  {
    title: 'Marketing Specialist',
    location: 'Full-time • Paris, France',
    description: 'We\'re looking for a Marketing Specialist to develop and implement marketing strategies. The ideal candidate will have experience with digital marketing and content creation.',
    tags: ['Digital Marketing', 'Content Strategy', 'SEO', 'Social Media'],
    isNew: false,
  },
  {
    title: 'Business Analyst',
    location: 'Full-time • Paris, France',
    description: 'We\'re seeking a Business Analyst to help identify business needs and develop solutions. The ideal candidate will have strong analytical and problem-solving skills.',
    tags: ['Data Analysis', 'Requirements Gathering', 'Process Modeling', 'Business Strategy'],
    isNew: true,
  },
];

export default Careers;
