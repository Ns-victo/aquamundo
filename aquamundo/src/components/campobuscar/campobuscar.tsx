
export default function CampoBuscar() {
    return (
        <div className="flex flex-row justify-start items-center ">
            <div className="bg-white w-[500px] h-10 rounded ">
                <input  className="bg-transparent w-full rounded py-2 px-4
            border border-gray-300          /* borda leve padrão */
            focus:border-blue-500          /* borda azul no foco */
            focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            outline-none                   /* remove contorno padrão do navegador */
            transition-colors duration-200 /* animação suave da borda */" 
                placeholder="Buscar produtos..."
                 type="text" />

            </div>
            
            <h3 className="ml-2 justify-center items-center "> 4 itens encontrados</h3>
        </div>
    )
}