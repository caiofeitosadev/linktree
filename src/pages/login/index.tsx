import { Link, useNavigate } from 'react-router';
import Input from '../../components/Input';
import { useState, type FormEvent } from 'react';
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Preencha todos os campos.');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin', { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col gap-5 w-full h-screen items-center justify-center">
      <Link to={'/'}>
        <h1 className="md:text-4xl text-3xl mt-20 text-white mb-10">
          Caio Feitosa
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-96 flex flex-col px-4"
      >
        <Input
          placeholder="Digite o seu e-mail"
          type="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          placeholder="Digite a sua senha"
          type="password"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button
          type="submit"
          className="p-4 bg-gray-200 rounded-sm font-medium"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}

export default Login;
