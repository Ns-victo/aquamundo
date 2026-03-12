export default function EnviarMensagem() {
  return (
    <div className="w-[500px] h-[550px] flex flex-col border border-gray-200 rounded-xl shadow-2xl items-center p-4">

      <h2 className="text-2xl font-bold">Envie sua mensagem</h2>

      <form className="w-full">

        <h3 className="mb-2 font-semibold mt-8">Nome Completo </h3>
        <input
          className="w-full mb-4  bg-gray-100 p-3 text-lg text-gray-600 border border-gray-300 rounded 
          focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Seu nome"
        />
        <h3 className="mb-2  font-semibold">Email</h3>
        <input
          className="w-full mb-4 bg-gray-100 p-3 text-lg text-gray-600 border border-gray-300 rounded 
          focus:outline-none focus:border-blue-500      "
          type="email"
          placeholder="seu@email.com"
        />
        <h3 className="mb-2 font-semibold" >Mensagem</h3>
        <textarea
          className="w-full mb-4 bg-gray-100 p-3 text-lg text-gray-600 border border-gray-300 rounded h-32
          focus:outline-none focus:border-blue-500"
          placeholder="Sua mensagem"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer
          hover:bg-blue-700 transition"
        >
          Enviar mensagem
        </button>

      </form>

    </div>
  );
}