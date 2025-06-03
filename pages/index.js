
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [openPokedex, setOpenPokedex] = useState(false);
  const [PokeMenu, setPokeMenu] = useState(false);
  const [PokeMenu2, setPokeMenu2] = useState(false);
  const [PokeMenu3, setPokeMenu3] = useState(false);
  const [PokeMenu4, setPokeMenu4] = useState(false);
  useEffect(() => {
    openPokedex && setTimeout(() => {
      setPokeMenu(true);
    }, 100) && setTimeout(() => {
      setPokeMenu2(true);
    }, 300) && setTimeout(() => {
      setPokeMenu3(true);
    }, 800) && setTimeout(() => {
      setPokeMenu4(true);
    }, 1300);
  }, [openPokedex])
  return (
    <>
    <Head>
      <title>Pokédex</title>
    </Head>
    <div className="flex h-screen w-full fixed top-0 left-0 items-center justify-center bg-gradient-to-b from-slate-700 to-slate-900 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/background.gif)' }}>
      <div className={`${openPokedex && 'bg-black/65'} h-full w-full fixed duration-1000 top-0 left-0`}></div>
      <div className={`w-[40rem] absolute h-[45rem] scale-45 md:scale-65 lg:scale-75 2xl:scale-100 xl:mt-[1rem] ${PokeMenu2 ? 'ml-[-9.5rem] md:ml-[-12rem]' : 'ml-[0rem] md:ml-[3rem]'} duration-1000 relative`}>

        <div className={`w-[3.8rem] h-[3.8rem] rounded-full bg-sky-300/40 absolute z-50 top-[2.81rem] left-[5.38rem] ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-full h-full bg-white ${PokeMenu2 ? 'opacity-0' : 'opacity-70'} absolute duration-[4s]`}></div>
        </div>
        <div className={`w-[1.4rem] h-[1.4rem] rounded-full bg-white/20 absolute z-50 top-[2.4rem] left-[10.25rem] ${PokeMenu2 ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-full h-full bg-white ${PokeMenu2 ? 'opacity-0' : 'opacity-90'} absolute duration-[4s]`}></div>
        </div>
        <div className={`w-[1.4rem] h-[1.4rem] rounded-full bg-white/20 absolute z-50 top-[2.4rem] left-[12.25rem] ${PokeMenu3 ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-full h-full bg-white ${PokeMenu3 ? 'opacity-0' : 'opacity-90'} absolute duration-[4s]`}></div>
        </div>
        <div className={`w-[1.4rem] h-[1.4rem] rounded-full bg-white/20 absolute z-50 top-[2.4rem] left-[14.25rem] ${PokeMenu4 ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-full h-full bg-white ${PokeMenu4 ? 'opacity-0' : 'opacity-90'} absolute duration-[4s]`}></div>
        </div>

        <div className={`w-[17rem] h-[12.03rem] rounded-lg bg-slate-900 absolute z-40 top-[12.85rem] left-[6.1rem] ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-[3rem] h-[30rem] bg-white rotate-45 ${PokeMenu2 ? 'left-[130%]' : 'left-[-100%]'} top-[-7rem] absolute duration-1000`}></div>
        </div>

        <div className={`w-[17rem] h-[4.38rem] rounded-lg bg-slate-900 absolute z-50 top-[11.9rem] right-[-9.8rem] ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-[3rem] h-[30rem] bg-white rotate-45 ${PokeMenu2 ? 'left-[130%]' : 'left-[-100%]'} top-[-7rem] absolute duration-[2.5s]`}></div>
        </div>

        <Image className={`absolute z-30 h-[45rem] ${openPokedex && 'w-0 ml-[27rem]'} duration-300`} width={500} height={900} alt="" src={'/tamp.webp'} onClick={()=>setOpenPokedex(true)}/>
        <Image className={`absolute z-40 h-[45rem] ${!PokeMenu ? 'w-0' : 'w-[31rem]'} ml-[25.75rem] duration-300`} width={500} height={900} alt="" src={'/aba.webp'} onClick={()=>setOpenPokedex(true)}/>
        <Image className="absolute z-20 h-[45rem]" width={500} height={900} alt="" src={'/open.webp'}/>
      </div>      
    </div>
    </>
  );
}
