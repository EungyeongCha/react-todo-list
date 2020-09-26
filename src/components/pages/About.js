import React from 'react';

function About() {
  return (
    // DOM에는 보이지 않지만 JSX사용 위한 신택스
    <React.Fragment>
      <h2>About</h2>
      <p>
        This is the TodoList app v.1.0.0. It is part of a React crash course
      </p>
    </React.Fragment>
  );
}

export default About;
