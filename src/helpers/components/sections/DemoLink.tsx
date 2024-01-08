const DemoLink = ({ title, link }: { title?: string; link?: string }) => {
  return (
    <a
      className="hover:text-red-600 font-bold cursor-pointer"
      onClick={() =>
        window.open(link ?? "https://react-test-udip.netlify.app/")
      }
    >
      {title ?? "https://react-test-udip.netlify.app/"}
    </a>
  );
};

export default DemoLink;
