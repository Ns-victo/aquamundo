
export default function CampoBuscar() {
    return (
        <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="h-10 w-full rounded bg-white sm:max-w-[500px]">
                <input className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                placeholder="Buscar produtos..."
                 type="text" />

            </div>
            

        </div>
    )
}