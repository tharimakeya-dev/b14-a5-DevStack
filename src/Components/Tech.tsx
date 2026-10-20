const Tech = () => {
  return (
    <>
    {/*//todo for laptop device  */}
      <section className="hidden md:flex flex-col container mx-auto text-start mb-8">
        <h3 className="font-extrabold text-[36px] text-[#0F172A] font-inter ">
          Explore the
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h3>
        <p className="text-[#64748B] font-normal text-[16px] font-jakarta">
          Pick one technology per category to build your ideal stack.
        </p>
      </section>

      {/*// todo for mobile device  */}

      <section className="container mx-auto text-center mb-8 md:hidden">
        <h3 className="font-extrabold text-[36px] text-[#0F172A] font-inter">
          Explore the
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h3>
        <p className="text-[#64748B] font-normal text-[16px] font-jakarta">
          Pick one technology per category to build your ideal stack.
        </p>
      </section>
    </>
  );
};

export default Tech;
