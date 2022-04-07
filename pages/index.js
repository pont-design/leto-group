import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/faq">
        <a>
          go to faq
        </a>
      </Link>
    </div>
  );
}
