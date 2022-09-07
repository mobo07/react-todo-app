export default function Controls({ getAll, getActive, getCompleted, current }) {
  return (
    <div className="flex items-center justify-center mt-4 rounded-md p-[12px] bg-white shadow-xl w-full md:shadow-none md:w-fit md:absolute md:bottom-[25px] md:left-[48.25%] md:-translate-x-[50%] md:p-1">
      <span
        onClick={getAll}
        className={`${
          current === "all" ? "text-pink-500" : "text-black"
        } mx-4 font-semibold cursor-pointer md:mx-3`}
      >
        All
      </span>
      <span
        onClick={getActive}
        className={`${
          current === "active" ? "text-pink-500" : "text-black"
        } mx-4 font-semibold cursor-pointer md:mx-3`}
      >
        Active
      </span>
      <span
        onClick={getCompleted}
        className={`${
          current === "completed" ? "text-pink-500" : "text-black"
        } mx-4 font-semibold cursor-pointer md:mx-3`}
      >
        Completed
      </span>
    </div>
  );
}
