import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function PasswordResetEmailSent() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <>
      <Head>
        <script src="/js/scripts.js" defer></script>
      </Head>

      <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-foreground text-background' : 'bg-background text-foreground'} relative`}>
        <button
          id="toggle-dark-mode"
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 bg-secondary text-secondary-foreground p-2 rounded"
        >
          Alternar Modo Escuro
        </button>

        <h1 className="text-4xl font-bold mb-4">E-mail de redefinição enviado</h1>
        <p className="text-lg mb-2">Verifique sua caixa de entrada para redefinir sua senha.</p>
        <a href="#" className="flex items-center text-secondary text-lg">
          <span className="material-icons">arrow_back</span>
          <span className="ml-2">Voltar</span>
        </a>
      </div>
    </>
  );
}
