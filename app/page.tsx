// pages/index.tsx

import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Disney Bingo App</title>
        <meta name="description" content="Family trip bingo game for Disney World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center p-4 bg-black w-screen h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 pt-[300px]">Disney Bingo App</h1>
        <p className="text-base sm:text-lg mb-6">Make your family trip to Disney World even more exciting with our bingo game!</p>

        <a
          href="https://apps.apple.com/us/app/dwbingo/id6472356354"
          className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full inline-block mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Now
        </a>

        <section className="text-base sm:text-lg">
          <p className="mb-2">Features:</p>
          <ul className="list-disc list-inside mb-4">
            <li>11 Bingo Cards</li>
            <li>30+ Unique Squares</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
