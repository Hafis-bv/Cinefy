import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export const SidebarSocial = () => {
  return (
    <div className="flex flex-col gap-3 py-4 text-xl font-semibold border-y border-gray-600">
      <a href="#" className="flex items-center gap-2">
        <FaInstagram size={25} />
        <span>Instagram</span>
      </a>
      <a href="#" className="flex items-center gap-2">
        <FaYoutube size={25} />
        <span>Youtube</span>
      </a>
      <a href="#" className="flex items-center gap-2">
        <FaDiscord size={25} />
        <span>Dicord</span>
      </a>
    </div>
  );
};
