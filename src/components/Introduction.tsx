const Introduction = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
            The game has changed. We've advanced from digital transformation to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
              intelligent systems
            </span>
            , automation, and generative AI for real results. Let's make this shift{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
              empowering
            </span>{" "}
            for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;