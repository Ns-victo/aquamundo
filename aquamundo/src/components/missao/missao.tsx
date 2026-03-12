import peixe_header from "../../assetsimagens/peixe_header.png";

export default function Missao() {
    return (
        <section className="flex flex-row gap-10">
            <div>
                <h1 className="text-4xl text-white font-bold mb-4">Nossa Missão</h1>
            </div>
            <img src={peixe_header} alt="Peixe" />

        </section>
    );
}