import { useEffect, useState, type FormEvent } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { db } from '../../services/firebaseConnection';
import { setDoc, doc, getDoc } from 'firebase/firestore';

function Networks() {
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');

  useEffect(() => {
    const docRef = doc(db, 'social', 'link');
    const unsub = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFacebook(docSnap.data().facebook);
        setInstagram(docSnap.data().instagram);
        setYoutube(docSnap.data().youtube);
      }
    };
    return () => {
      unsub();
    };
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      setDoc(doc(db, 'social', 'link'), {
        facebook,
        instagram,
        youtube,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes socias
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-xl w-full">
        <label htmlFor="facebook" className="text-white mb-2 mt-4">
          Link do Facebook
        </label>
        <Input
          placeholder="Digite a url do seu perfil do facebook"
          type="url"
          id="facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label htmlFor="instagram" className="text-white mb-2 mt-4">
          Link do Instagram
        </label>
        <Input
          placeholder="Digite a url do seu perfil do facebook"
          type="url"
          id="instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label htmlFor="youtube" className="text-white mb-2 mt-4">
          Link do YouTube
        </label>
        <Input
          placeholder="Digite a url do seu perfil do facebook"
          type="url"
          id="youtube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <button
          type="submit"
          className="bg-neutral-600 px-8 py-4 rounded-sm mt-5 font-medium text-white cursor-pointer"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default Networks;
