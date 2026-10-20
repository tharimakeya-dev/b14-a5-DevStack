const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100">
      <div className="relative h-20 w-20">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-base-300"></div>

        {/* Animated ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-secondary"></div>

        {/* Center dot */}
        <div className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-primary"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
