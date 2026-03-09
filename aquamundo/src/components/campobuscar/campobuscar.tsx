
export default function CampoBuscar() {
    return (
        <div className="flex flex-row ">
            <div className="bg-gray-100 w-[500px] h-10 rounded ">
                <input  className="bg-transparent  w-full border-none focus:outline-none"
                 type="text" />

            </div>
            
            <h3 className="ml-2 justify-center items-center ">X itens encontrados</h3>
        </div>
    )
}