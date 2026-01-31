export const Hero = () => {
  return (
    <div className="flex rounded-3xl flex-col gap-3 items-center justify-center text-center bg-center bg-cover w-[90%] px-4 mx-auto h-130 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://www.techhive.com/wp-content/uploads/2023/10/Netflix-Hintergrund.jpg?=50&strip=all')]">
      <h1 className="font-semibold text-3xl xl:text-6xl">
        Welcome to <span className="text-primary">Cinefy</span>
      </h1>
      <p className="max-w-xl text-xs tracking-[1px]">
        Welcome to Cinefy — your personal gateway to the world of movies and
        series. Dive into fresh releases, timeless classics, trending shows, and
        hidden gems. With easy navigation and rich details, Cinefy helps you
        find the perfect title for every mood.
      </p>
    </div>
  );
};
