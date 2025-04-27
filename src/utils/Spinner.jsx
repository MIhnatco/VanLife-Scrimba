function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-24 h-24 border-8 border-gray-300 border-t-[#e17654] rounded-full animate-spin"
        role="status"
        aria-label="Loading spinner"
      ></div>
    </div>
  );
}

export default Spinner;
