import Link from 'next/link';
import Image from 'next/image';
import { PATHS } from '../helpers/constants';
import style from '../styles/notFound.module.css';

export default function NotFound() {
  return (
    <main className={style.not_found}>
      <h1>OOPS! This page is not found...</h1>
      <Image src="/not-found.avif" alt="Not found" width={800} height={450} />
      <Link href={PATHS.MAIN} className={style.link}>
        Go to main
      </Link>
    </main>
  );
}
