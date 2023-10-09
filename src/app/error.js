"use client"
const Error = ({ error, reset }) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-red-500">
                {error.message || "Something went wrong happened!"}
            </h1>
            <button  onClick={()=>reset()} className="border px-4 py-2 rounded bg-white hover:bg-blue-200">
                Reset
            </button>
        </div>
    );
};

export default Error;