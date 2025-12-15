export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="font-extrabold text-primary text-9xl after:content-[''] after:block after:w-30 after:h-[2px] after:bg-yellow-400 after:mx-auto after:mt-3 after:mb-3">
        404
      </h1>
      <p className=" uppercase text-3xl tracking-wider  font-semibold">
        page not found.
      </p>
    </div>
  );
}
