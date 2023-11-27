// pages/index.tsx

import Head from 'next/head';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <main>
      <Image
      className='rounded-[35px] flex justify-center m-auto mb-7 mt-32'
      src="/newico.png"
      width={150}
      height={150}
      alt="Picture of the author"
    />
        <h1 className='flex justify-center font-bold text-xl'>DWBingo for iOS</h1>
        <h2 className='flex justify-center font-black text-4xl tracking-tight text-center p-5'>A natively built <br /> bingo game. Open <br />  source. Free  <br /> Forever.</h2>
        <h3 className='flex justify-center font-medium text-gray-700 text-center pl-[30px] pr-[30px] mt-5'>DWBingo is an exciting new bingo game written entirely and unapologetically for iOS. With haptics, over 15 bingo cards and a key focus on privacy it's an app that feels right at home on your iPhone  </h3>
        <a href=""><h4 className='flex justify-center p-3 ml-16 mr-16 rounded-full bg-blue-600 m-7 mt-10'>Download Alpha</h4></a>
        <div className='justify-center bg-slate-800 rounded-xl ml-5 mr-5 mt-10'>
          <h1 className='p-[1px]'></h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <h5 className='flex justify-center p-5 mt-[-25px]'>DWBingo supports the creation of one child card. To register more than two cards you'll need another device.</h5>
        </div>
    </main>
  );
};

export default Home;
