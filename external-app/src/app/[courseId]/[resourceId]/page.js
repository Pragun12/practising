'use client'
import * as React from 'react'

export default function ResourcePage({ params, searchParams }) {
  const { courseId, resourceId } = React.use(params);
  const { targetOrigin } = React.use(searchParams);
  
  const handleEvent = () => {
    window.top.postMessage({ name: 'from-side-panel', value: resourceId }, targetOrigin);
  }

  return (
    <div>
      <h1>Course ID: {courseId}</h1>
      <h2>Resource ID: {resourceId}</h2>
      <p>This page displays data received from a POST request.</p>
      {Object.keys(React.use(searchParams)).length > 0 && (
        <>
          <h3>Data from POST:</h3>
          <pre>{JSON.stringify(React.use(searchParams), null, 2)}</pre>
        </>
      )}

      <button onClick={handleEvent} >Click me</button>
    </div>
  );
} 