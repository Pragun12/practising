export default function ResourcePage({ params, searchParams }) {
  const { courseId, resourceId } = params;

  return (
    <div>
      <h1>Course ID: {courseId}</h1>
      <h2>Resource ID: {resourceId}</h2>
      <p>This page displays data received from a POST request.</p>
      {Object.keys(searchParams).length > 0 && (
        <>
          <h3>Data from POST:</h3>
          <pre>{JSON.stringify(searchParams, null, 2)}</pre>
        </>
      )}
    </div>
  );
} 