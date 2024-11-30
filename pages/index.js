import Head from 'next/head';
export default function Home() {
 return (
 <>
 <Head>
 <title>My Static Site</title>
 <meta name="description" content="This is a sample static site." />
 <meta property="og:title" content="My Static Site" />
 <meta property="og:description" content="This is a sample static site using 
Next.js." />
 </Head>
 <header></header>
 <main>
 <h1>Welcome to My Static Site</h1>
 <img src="/image.png" alt="Example Image" loading="lazy" />
 </main>
 <footer></footer>
 </>
 );
}
