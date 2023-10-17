

const ErrorPage = () => {
    return (
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-red-600 font-semibold py-5">
          404 not found
        </h1>
        <h1 className="text-xl">
          The page you are looking for does not exists
        </h1>
      </div>
    );
};

export default ErrorPage;