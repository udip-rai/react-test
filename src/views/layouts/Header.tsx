import { useLocation } from "react-router-dom";
import { NavItemsSchema } from "utils/schemas/GlobalSchema";
import { nav_items } from "./_props";

const Header = () => {
  // Hooks
  const { pathname } = useLocation();

  // Check if the navbar link is the same as the window location.href
  const is_active_link = (link: string) =>
    pathname === link ? "text-blue-600" : "";

  return (
    <header className="header bg-gray-200 px-5 flex justify-between items-center">
      {/* Nav Items, might need to create a component for it */}
      <nav className="flex basis-1/2 gap-10 items-center">
        {nav_items.map(({ label, href }: NavItemsSchema) => (
          <a
            key={href}
            href={href}
            className={`${is_active_link(href)} hover:text-blue-600`}
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        className="hover:text-red-600"
        href="https://react-test-udip.netlify.app/"
      >
        Demo here
      </a>
    </header>
  );
};

export default Header;
