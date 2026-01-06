import Social from '../../components/Social';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../services/firebaseConnection';

interface SocialMediaProps {
  id: string;
  name: string;
  url: string;
  textColor: string;
  backgroundColor: string;
}
interface SocialLinkProps {
  facebook: string;
  instagram: string;
  youtube: string;
}

function Home() {
  const [links, setLinks] = useState<SocialMediaProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinkProps>();

  useEffect(() => {
    const loadLinks = async () => {
      const linksRef = collection(db, 'links');
      const queryRef = query(linksRef, orderBy('created', 'asc'));

      const snap = await getDocs(queryRef);
      if (!snap.empty) {
        const lista = [] as SocialMediaProps[];

        snap.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            backgroundColor: doc.data().backgroundColor,
            textColor: doc.data().textColor,
          });
        });
        setLinks(lista);
      }
    };

    loadLinks();
  }, []);

  useEffect(() => {
    const loadSocialLinks = async () => {
      const docRef = doc(db, 'social', 'link');
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        setSocialLinks({
          facebook: snap.data().facebook,
          instagram: snap.data().instagram,
          youtube: snap.data().youtube,
        });
      }
    };
    loadSocialLinks();
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center gap-5">
      <h1 className="md:text-4xl text-3xl mt-20 text-white">Caio Feitosa</h1>
      <span className="text-gray-200 mt-5">Veja meus links:</span>
      <main className="flex flex-col items-center w-3xl max-w-full md:max-w-xl">
        {links.map((link) => (
          <section
            key={link.id}
            className="flex flex-col items-center justify-center md:*:min-w-xl *:w-full *:py-3 *:px-12 *:text-center *:rounded-sm *:bg-fuchsia-50 *:transition-all *:hover:bg-[#111] *:hover:text-white gap-4"
          >
            <a
              href={link.url}
              target="_blank"
              style={{
                color: link.textColor,
                backgroundColor: link.backgroundColor,
              }}
            >
              {link.name}
            </a>
          </section>
        ))}
        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <footer className="flex justify-center gap-4 py-5 my-5">
            <Social url={socialLinks.facebook}>
              <FaFacebook size={35} color="#e6e6e6" />
            </Social>
            <Social url={socialLinks.instagram}>
              <FaInstagram size={35} color="#e6e6e6" />
            </Social>
            <Social url={socialLinks.youtube}>
              <FaYoutube size={35} color="#e6e6e6" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}

export default Home;
