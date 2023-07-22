import Image from 'next/image'
import styles from './page.module.css'
import ClientComponentSample from '@/app/clientComponentSample';
import ServerComponentSample from '@/app/serverComponentSample';
import ServerComponentSample2 from '@/app/serverComponentSample2';
import ClientComponentUseAtomValueSample from '@/app/clientComponentUseAtomValueSample';
import ClientComponentUseSetAtomSample from '@/app/clientComponentUseSetAtomSample';
import ServerComponentReactQueryPrefetchSample from '@/app/serverComponentReactQueryPrefetchSample';

export default function Home() {

  return (
    <div className={styles.main}>
      <h1>메인 페이지</h1>
      <div className={styles.center}>
        abc
      </div>
      <div>
        {/* 클라이언트 컴포넌트 자식으로 서버 컴포넌트 넘기기 */}
        <ClientComponentSample>
          <ServerComponentSample></ServerComponentSample>
          <ServerComponentSample2></ServerComponentSample2>
        </ClientComponentSample>
      </div>
      <div>
        {/* 클라이언트 컴포넌트에서 jotai 사용하기 */}
        <ClientComponentUseAtomValueSample></ClientComponentUseAtomValueSample>
        <ClientComponentUseSetAtomSample></ClientComponentUseSetAtomSample>
      </div>
      {/* 서버 컴포넌트에서 react-query로 prefetch 한 데이터를 클라이언트 컴포넌트에서 사용하기!!! - 좀 어려움 */}
      <div>
        <ServerComponentReactQueryPrefetchSample></ServerComponentReactQueryPrefetchSample>
      </div>
    </div>
  );
  /*
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
  */
}
