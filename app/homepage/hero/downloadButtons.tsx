const DownloadButtons = () => {
  return (
    <>
      <div className="mx-auto w-max mt-16 grid grid-cols-2 gap-16">
        <a
          className="group relative inline-block overflow-hidden border border-accent px-8 py-3 focus:outline-none focus:ring"
          href="#"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-accent transition-all group-hover:w-full group-active:bg-accent"></span>

          <span className="relative text-lg font-semibold text-accent transition-colors group-hover:text-secondary">
            Resume / CV
          </span>
        </a>
        <a
          className="group relative inline-block overflow-hidden border border-accent px-8 py-3 focus:outline-none focus:ring"
          href="#"
        >
          <span className="absolute inset-y-0 right-0 w-[2px] bg-accent transition-all group-hover:w-full group-active:bg-accent"></span>

          <span className="relative text-lg font-semibold text-accent transition-colors group-hover:text-secondary">
            Linkedin
          </span>
        </a>
      </div>
    </>
  );
};

export default DownloadButtons;
