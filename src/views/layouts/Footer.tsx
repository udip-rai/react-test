import { DemoLink } from "helpers/components";

const Footer = () => {
  return (
    <footer className="footer px-5 bg-gray-200 flex justify-between items-center">
      <DemoLink title="All Rights Reserved &copy; Udip Rai" />

      <div className="flex flex-col">
        <a href="mailto:udiprai28@gmail.com">
          <span className="font-bold">Send Email:</span>{" "}
          <span className="font-medium text-sm">@udiprai28</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
