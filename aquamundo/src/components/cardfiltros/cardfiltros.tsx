import { CiFilter } from "react-icons/ci";


export default function CardFiltros() {
    return (
        <div className="w-[250px] min-h-[350px] bg-white flex flex-col 
                        items-center gap-10 justify-start items-start
                        border border-black/20 rounded-lg shadow-md p-5">
            <div className="flex flex-row ">
                <CiFilter size={25} />
                <h3 className="font-bold ml-2 text-xl">Filtros</h3>
            </div>
            <div className="flex flex-col gap-4  w-full">
                <button className=" w-full text-start text-gray-600 py-2 px-4 rounded hover:bg-blue-200 transition cursor-pointer hover:text-blue-800">
                    Todos
                </button>
                <button className=" w-full text-start text-gray-600 py-2 px-4 rounded hover:bg-blue-200 transition cursor-pointer hover:text-blue-800">
                    Peixes
                </button>
                <button className=" w-full text-start text-gray-600 py-2 px-4 rounded hover:bg-blue-200 transition cursor-pointer hover:text-blue-800">
                    Ração 
                </button>
                <button className="w-full text-start text-gray-600 py-2 px-4 rounded hover:bg-blue-200 transition cursor-pointer hover:text-blue-800">
                    Equipamentos
                </button>
                <button className="w-full text-start text-gray-600 py-2 px-4 rounded hover:bg-blue-200 transition cursor-pointer hover:text-blue-800">
                    Decoração
                </button>
            </div>

        </div>
    );
}