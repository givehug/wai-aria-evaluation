import Head from 'next/head';

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
            <a href="/empty-template">Empty Template</a>
          </li>
          <li>
            <a href="/chakra-ui">Chakra UI</a>
          </li>
          <li>
            <a href="/material-ui">Materials UI</a>
          </li>
          <li>
            <a href="/ant-design">Ant Design</a>
          </li>
          <li>
            <a href="/reakit">Reakit</a>
          </li>
        </ol>
      </main>
    </div>
  );
}
