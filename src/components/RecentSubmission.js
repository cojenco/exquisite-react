import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const lastLine = Object.values(props.mostRecentLine).join(' ');

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{lastLine}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  mostRecentLine: PropTypes.object.isRequired,
}

export default RecentSubmission;
