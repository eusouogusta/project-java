import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Cadastro() {
  return (
    <div className="bg-[#13072e] flex items-center justify-center min-h-screen relative">
      {/* Botão Voltar */}
      <div className="absolute top-10 left-40">
        <button className="flex items-center bg-white text-black py-2 px-4 rounded hover:bg-gray-200">
          <i className="bi bi-arrow-left mr-2"></i> Voltar
        </button>
      </div>

      {/* Imagem Corte */}
      <img
        className="absolute bottom-10 left-28 w-[450px] h-auto"
        src="/assets/corte.png"
        alt="Corte"
      />

      {/* Formulário de Cadastro */}
      <div className="bg-white text-black max-w-md w-full p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Crie uma nova conta</h1>
        <p className="text-center mb-6">Já tem uma conta? Login</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              NOME
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="name"
              placeholder="Seu nome"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              EMAIL
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="email"
              id="email"
              placeholder="Seu email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              SENHA
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="password"
              id="password"
              placeholder="Sua senha"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">
              REPITA SUA SENHA
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="password"
              id="confirm-password"
              placeholder="Confirme sua senha"
              required
            />
          </div>
          <div>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              type="submit"
            >
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>

      {/* Botão Login */}
      <div className="absolute top-10 right-40">
        <button className="flex items-center bg-white text-black py-2 px-4 rounded hover:bg-gray-200">
          Login <i className="bi bi-arrow-right ml-2"></i>
        </button>
      </div>

      {/* Imagem Bigode */}
      <img
        className="absolute top-80 right-24 w-[400px] h-auto"
        src="/assets/bigode.png"
        alt="Bigode"
      />
    </div>
  );
}
