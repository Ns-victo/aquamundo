import CardFiltros from "../../components/cardfiltros/cardfiltros";
import CampoBuscar from "../../components/campobuscar/campobuscar";
import DestaquesSemana from "../../components/destaques/destaquesSemana";

export default function Loja() {
  return (
    <div className="w-full flex flex-col items-center  justify-start">

      {/* Seção azul com texto */}
      <section className="w-full min-h-[350px] bg-[#0B3C5D] flex items-center justify-center p-10">
        <div className="text-center text-white max-w-6xl">
          <h4 className="text-xl font-bold">
            Explore nossa seleção curada de peixes, corais, equipamentos e muito mais para seu aquário.
          </h4>
        </div>
      </section>

        <div className="w-full max-w-6xl  flex flex-row mt-10 gap-5">
          <CardFiltros />
          <CampoBuscar />
        </div>
        <div className="w-full max-w-6xl  flex flex-row mt-10 gap-5">
          <DestaquesSemana />
        </div>
   

    </div>
  );
}