import { Link } from 'react-router';

function ErrorPage() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-white text-4xl font-medium">Página não encontrada</h1>
      <p className="text-gray-100">Você caiu em uma página que não existe</p>
      <Link className="bg-red-500 text-white px-6 py-3 rounded-sm" to={'/'}>
        Voltar para o início
      </Link>
    </div>
  );
}
export default ErrorPage;
