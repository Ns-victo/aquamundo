import { CiFilter } from "react-icons/ci";


export default function CardFiltros() {
    return (
        <div className="flex w-full flex-col items-start justify-start gap-8 rounded-lg border border-black/20 bg-white p-5 shadow-md sm:p-6 lg:w-[250px] lg:min-h-[350px]">
            <div className="flex flex-row items-center">
                <CiFilter size={25} />
                <h3 className="font-bold ml-2 text-xl">Filtros</h3>
            </div>
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
                <button className="w-full rounded px-4 py-2 text-start text-gray-600 transition hover:bg-blue-200 hover:text-blue-800 cursor-pointer">
                    Todos
                </button>
                <button className="w-full rounded px-4 py-2 text-start text-gray-600 transition hover:bg-blue-200 hover:text-blue-800 cursor-pointer">
                    Peixes
                </button>
                <button className="w-full rounded px-4 py-2 text-start text-gray-600 transition hover:bg-blue-200 hover:text-blue-800 cursor-pointer">
                    Ração 
                </button>
                <button className="w-full rounded px-4 py-2 text-start text-gray-600 transition hover:bg-blue-200 hover:text-blue-800 cursor-pointer">
                    Equipamentos
                </button>
                <button className="w-full rounded px-4 py-2 text-start text-gray-600 transition hover:bg-blue-200 hover:text-blue-800 cursor-pointer">
                    Decoração
                </button>
            </div>

        </div>
    );
}