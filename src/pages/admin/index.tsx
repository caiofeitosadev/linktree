import { useEffect, useState, type FormEvent } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { FiTrash } from 'react-icons/fi';
import { db } from '../../services/firebaseConnection';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';

interface SocialMediaProps {
  id: string;
  name: string;
  url: string;
  textColor: string;
  backgroundColor: string;
}

function Admin() {
  const [socialName, setSocialName] = useState('Instagram');
  const [socialUrl, setSocialUrl] = useState('#');
  const [textInputColor, setTextInputColor] = useState('#fff');
  const [bgInputColor, setBgInputColor] = useState('#000');
  const [socialMedia, setSocialMedia] = useState<SocialMediaProps[]>([]);

  useEffect(() => {
    const ref = collection(db, 'links');
    const queryRef = query(ref, orderBy('created', 'asc'));
    const unsub = onSnapshot(queryRef, (snapshot) => {
      const lista: SocialMediaProps[] = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          backgroundColor: doc.data().backgroundColor,
          textColor: doc.data().textColor,
        });
      });
      setSocialMedia(lista);
    });

    return () => unsub();
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (socialName === '' || socialUrl === '') {
      return;
    }
    try {
      addDoc(collection(db, 'links'), {
        name: socialName,
        url: socialUrl,
        backgroundColor: bgInputColor,
        textColor: textInputColor,
        created: new Date(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSocialName('');
      setSocialUrl('');
      setTextInputColor('#fff');
      setBgInputColor('#000');
    }
  }
  async function handleDeleteLink(id: string) {
    const docRef = doc(db, 'links', id);
    await deleteDoc(docRef);
  }

  return (
    <div className="flex items-center flex-col min-h-screen p-5">
      <Header />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 justify-center mt-5 mb-5 w-full max-w-xl"
      >
        <label className="text-gray-100">Qual o nome da rede social?</label>
        <Input
          placeholder="Digite o nome da rede social"
          type="text"
          required
          value={socialName}
          onChange={({ target }) => setSocialName(target.value)}
        />
        <label className="text-gray-100">Qual a URL do link?</label>
        <Input
          placeholder="Digite o link da rede social"
          type="text"
          required
          value={socialUrl}
          onChange={({ target }) => setSocialUrl(target.value)}
        />
        <section className="flex my-4 gap-10">
          <div className="flex gap-2">
            <label className="text-gray-100">Cor de fundo do button</label>
            <input
              type="color"
              value={bgInputColor}
              onChange={({ target }) => setBgInputColor(target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label className="text-gray-100">Cor do link</label>
            <input
              type="color"
              value={textInputColor}
              onChange={({ target }) => setTextInputColor(target.value)}
            />
          </div>
        </section>
        <div className="flex items-center justify-start flex-col gap-2 p-5 mt-5 border border-neutral-700 rounded-md">
          <span className="text-white font-medium">Preview</span>
          <a
            href={socialUrl}
            className="w-11/12 max-w-lg items-center py-4 px-8 text-center rounded-sm"
            style={{
              backgroundColor: bgInputColor,
              color: textInputColor,
            }}
          >
            {socialName}
          </a>
        </div>
        <button
          type="submit"
          className="cursor-pointer mt-5 rounded-sm px-7 py-4 bg-gray-900 text-white"
        >
          Adicionar link
        </button>
      </form>

      <section className="flex flex-col gap-4 items-center justify-center w-11/12 max-w-xl">
        <h2 className="text-white text-2xl mt-5 font-medium">Meus links</h2>
        <div className="w-11/12 max-w-lg flex flex-col gap-4">
          {socialMedia.map((item) => (
            <button
              key={item.id}
              style={{
                color: item.textColor,
                backgroundColor: item.backgroundColor,
              }}
              className=" py-4 px-8 rounded-sm flex gap-2 justify-between items-center w-full"
            >
              <a href={item.url} className="w-full">
                {item.name}
              </a>
              <FiTrash
                size={18}
                color="#fff"
                cursor={'pointer'}
                onClick={() => handleDeleteLink(item.id)}
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Admin;
