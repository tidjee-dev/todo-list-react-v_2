import { CiBoxList } from "react-icons/ci";
import { IoCalendarSharp } from "react-icons/io5";
import { MdImportExport } from "react-icons/md";

const Header = () => {
  return (
    <header className="dark:bg-secondary-dark h-[6rem] flex items-center bg-secondary-subtle text-dark dark:text-light shadow-2xl">
      <nav className="container flex flex-col items-center tablet:flex-row tablet:justify-between">
        <h1 className="text-xl font-bold mobile:text-2xl tablet:text-3xl">
          Tidjee's TodoList v2
        </h1>
        <ul className="flex flex-wrap justify-center text-sm font-semibold tablet:text-lg tablet:gap-6">
          <li>
            <a className="nav-link" href="#">
              <CiBoxList />
              Task List
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              <IoCalendarSharp />
              Calendar
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              <MdImportExport />
              Export | Import
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
