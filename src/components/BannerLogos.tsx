export const BannerLogos = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full my-10">
      <div className="flex justify-center items-center">
        <img
          alt="logo ministerio de educación"
          src="/educacion.webp"
          className="max-h-32 w-auto object-contain"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          alt="logo snies"
          src="/snies.png"
          className="max-h-32 w-auto object-contain"
        />
      </div>
    </div>
  );
};
