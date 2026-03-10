import CardFiltros from "../../components/cardfiltros/cardfiltros";
import CampoBuscar from "../../components/campobuscar/campobuscar";
import CardLoja from "../../components/cardLoja/cardLoja";

export default function Loja() {
  return (
    <div className="w-full flex flex-col items-center justify-start">

      {/* Seção azul com texto */}
      <section className="w-full min-h-[350px] bg-[#0B3C5D] flex items-center justify-center p-10">
        <div className="text-center text-white max-w-6xl">
          <h4 className="text-xl font-bold">
            Explore nossa seleção curada de peixes, corais, equipamentos e muito mais para seu aquário.
          </h4>
        </div>
      </section>
      <div className="max-w-6xl flex  gap-5 mt-10">
        <div  >
          <CardFiltros />

        </div >
        <div  >
          <CampoBuscar />
          
          <CardLoja />
        </div >

      </div>




    </div>
  );
}