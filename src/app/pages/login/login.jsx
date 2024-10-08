import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Conheça nossos planos</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-blue-500 hover:underline">Esqueci minha senha</a>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
            Continuar
          </button>
          <div className="text-center mt-6">
            <p className="text-gray-500">OU</p>
            <a href="#" className="text-blue-500 hover:underline">Cadastre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
