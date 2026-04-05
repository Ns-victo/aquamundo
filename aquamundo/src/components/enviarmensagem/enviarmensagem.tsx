export default function EnviarMensagem() {
  return (
    /* CARD DO FORMULÁRIO:
       - w-full + max-w-xl: Permite fluidez no mobile sem perder controle de largura no desktop.
       - min-h-[550px]: Mantem o bloco visualmente equilibrado ao lado da coluna de informacoes.
       - shadow-2xl: Destaca o formulario como principal ponto de acao.
    */
    <div className="w-full max-w-xl min-h-[550px] flex flex-col border border-gray-200 rounded-xl shadow-2xl items-center p-4 sm:p-6">

      {/* TÍTULO DO FORMULÁRIO:
          - text-center: Centraliza a chamada principal.
          - text-2xl / sm:text-3xl: Mantem hierarquia visual em qualquer tela.
      */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Envie sua mensagem</h2>

      {/* ESTRUTURA DE CAMPOS:
          - w-full: Faz os campos ocuparem toda a largura util do card.
          - mt-6: Cria respiro entre o titulo e os inputs.
      */}
      <form className="w-full mt-6">

        {/* CAMPO NOME COMPLETO */}
        <h3 className="mb-2 font-semibold">Nome Completo </h3>
        <input
          className="w-full mb-4 bg-gray-100 p-3 text-base sm:text-lg text-gray-600 border border-gray-300 rounded 
          focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Seu nome"
        />

        {/* CAMPO E-MAIL */}
        <h3 className="mb-2  font-semibold">Email</h3>
        <input
          className="w-full mb-4 bg-gray-100 p-3 text-base sm:text-lg text-gray-600 border border-gray-300 rounded 
          focus:outline-none focus:border-blue-500      "
          type="email"
          placeholder="seu@email.com"
        />

        {/* CAMPO MENSAGEM:
            - resize-none: Evita que o usuario distorça o layout manualmente.
            - h responsiva: Mantem area de escrita confortavel em diferentes telas.
        */}
        <h3 className="mb-2 font-semibold" >Mensagem</h3>
        <textarea
          className="w-full mb-4 bg-gray-100 p-3 text-base sm:text-lg text-gray-600 border border-gray-300 rounded h-32 sm:h-40 resize-none
          focus:outline-none focus:border-blue-500"
          placeholder="Sua mensagem"
        />

        {/* BOTÃO DE ENVIO:
            - w-full: Amplia a area clicavel e reforca a acao principal.
            - hover:bg-blue-700: Fornece feedback visual claro.
        */}
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