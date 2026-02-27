export default function EntrarContato() {
  return (
    <section
      className="
        bg-[#0284C7]
        w-full
        py-16 
        min-h-[25vh] md:h-[35vh] lg:h-[45vh]
        flex items-center
      "
    >
      <div className="w-full max-w-screen-xl h-auto mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">

          <h2
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-6xl
              font-bold text-white
            "
          >
            Tem dúvidas sobre seu projeto?
          </h2>

          <p
            className="
              text-sm sm:text-base md:text-lg lg:text-2xl
              text-white max-w-4xl
            "
          >
            Nossa equipe de biólogos e especialistas está pronta para ajudar você
            a montar o ecossistema perfeito.
          </p>

          <button
            className="
              mt-6 bg-white text-blue-600 font-semibold
              h-25
              cursor-pointer
              px-10 py-4 rounded-full
              text-sm md:text-lg lg:text-xl
              hover:bg-[#EFF6FF] transition-colors
              shadow-xl
            "
          >
            Fale com Especialista
          </button>

        </div>
      </div>
    </section>
  );
}