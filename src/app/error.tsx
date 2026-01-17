"use client";
interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="font-extrabold text-primary text-9xl after:content-[''] after:block after:w-30 after:h-[2px] after:bg-yellow-400 after:mx-auto after:mt-3 after:mb-3">
        500
      </h1>
      <p className=" uppercase text-center text-3xl tracking-wider font-semibold">
        {error.message}
      </p>
      <button
        onClick={reset}
        className="bg-primary font-bold text-lg cursor-pointer   py-3 mt-6 px-14 rounded-2xl   "
      >
        Try again
      </button>
    </div>
  );
}
