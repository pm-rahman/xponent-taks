import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-lg">{"This Router Doesn't exist"}</h2>
      <Link href="/" className="mt-2 mb-2 inline-block">
        <button className="border px-4 py-2 rounded bg-white hover:bg-blue-200">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
