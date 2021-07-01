import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '0 30px' }}>
      <Head>
        <title>WAI ARIA Evaluation / ReactJS</title>
        <meta name="description" content="WAI ARIA Evaluation / ReactJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>WAI ARIA Evaluation / ReactJS</h1>

        <ol>
          <li>
            <Link href="/empty-template">
              <a>Empty Template</a>
            </Link>
          </li>
          <li>
            <Link href="/chakra-ui">
              <a>Chakra UI</a>
            </Link>
          </li>
          <li>
            <Link href="/material-ui">
              <a>Materials UI</a>
            </Link>
          </li>
          <li>
            <Link href="/ant-design">
              <a>Ant Design</a>
            </Link>
          </li>
          <li>
            <Link href="/reakit">
              <a>Reakit</a>
            </Link>
          </li>
          <li>
            <Link href="/bootstrap">
              <a>React Bootstrap</a>
            </Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
