const Footer = () => {
  return (
    <footer className="footer px-5 bg-gray-200 flex justify-between items-center">
      <a
        onClick={() => window.open("https://github.com/udip-rai")}
        className="font-bold cursor-pointer hover:text-gray-700"
      >
        All Rights Reserved &copy; Udip Rai
      </a>

      <div className="flex flex-col">
        <a href="mailto:udiprai28@gmail.com">
          <span className="font-bold">Send Email:</span> @udiprai28
        </a>
      </div>
    </footer>
  );
};

export default Footer;
