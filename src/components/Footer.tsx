import { FiExternalLink } from "react-icons/fi";
import DarkMode from "./DarkMode";

const Footer = () => {
  return (
    <footer className="text-center dark:bg-secondary-dark dark:text-light h-[5rem] flex flex-col items-center justify-center bg-secondary-subtle relative">
      <div>
        Want to see the{" "}
        <a
          href="https://todo-list-react-v-1.vercel.app/"
          target="_blank"
          className="inline-flex items-center duration-300 hover:text-accent hover:underline"
        >
          Task List v1
          <FiExternalLink />
        </a>
        ?
      </div>
      <p className="mt-2 text-sm">
        &copy;{" "}
        <a
          href="https://github.com/tidjee-dev"
          target="_blank"
          className="duration-300 hover:text-accent hover:underline"
        >
          Tidjee
        </a>{" "}
        - {""}
        {new Date().getFullYear()}
      </p>
      <div className="absolute right-4 bottom-[1.25rem]">
        <DarkMode />
      </div>
    </footer>
  );
};

export default Footer;
