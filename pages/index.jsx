import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <div className={styles.title}>
        <h1>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          ipsa unde nisi totam ullam provident veritatis eligendi molestiae,
          rerum ad qui nam itaque. Blanditiis, inventore fugit rem qui veniam
          quos.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          ipsa unde nisi totam ullam provident veritatis eligendi molestiae,
          rerum ad qui nam itaque. Blanditiis, inventore fugit rem qui veniam
          quos.
        </p>
        <Link href="/users">
          <a className={styles.btn}>See User Listing</a>
        </Link>
      </div>
    </>
  );
}
