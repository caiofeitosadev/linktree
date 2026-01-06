import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router';
import { auth } from '../../services/firebaseConnection';
import { signOut } from 'firebase/auth';

function Header() {
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <header className="w-full max-w-2xl p-4">
      <nav className="flex bg-white py-2 px-7 items-center justify-between rounded-sm">
        <div className="flex gap-4 *:p-3">
          <Link to={'/'}>Home</Link>
          <Link to={'/admin'}>Meus links</Link>
          <Link to={'/admin/social'}>Sociais</Link>
        </div>
        <button onClick={handleLogout} className="cursor-pointer">
          <BiLogOut size={28} color="#db2629" />
        </button>
      </nav>
    </header>
  );
}
export default Header;
