import { links } from "../assets/data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100 ">
      <div className="allign_element py-2 flex gap-6 sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold hidden md:block">
          Tanvir <span className="text-emerald-600"> Rafi</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
