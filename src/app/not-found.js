export default function NotFound({ statusCode }) {
  return (
    <div>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </h1>
    </div>
  );
}

NotFound.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
