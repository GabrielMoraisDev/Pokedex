
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pokemon, setPokemon] = useState([]);
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

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
    .then(response => response.json())
    .then(data => {
      setPokemon(data)
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
  }, [page])

  return (
    <>
    <Head>
      <title>Pokédex</title>
    </Head>
    <div className="fixed w-full top-0 left-0 flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-700 to-slate-900 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/background.gif)' }}>
      <div className={`${openPokedex && 'bg-black/65'} h-full w-full absolute duration-1000`}></div>
      <div className={`w-[53vw] flex place-items-center h-[93vw] lg:w-[40rem] lg:h-[45rem] ${PokeMenu2 && 'ml-[-43vw] lg:ml-[-15rem]'} duration-1000 relative`}>

        <div className={`lg:w-[3.8rem] lg:h-[3.8rem] rounded-full bg-sky-300/40 absolute z-50 top-[2.81rem] left-[5.38rem] ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-full h-full bg-white ${PokeMenu2 ? 'opacity-0' : 'opacity-70'} absolute duration-[4s]`}></div>
        </div>
        <div className={`lg:w-[1.4rem] lg:h-[1.4rem] rounded-full bg-white/20 absolute z-50 top-[2.4rem] left-[10.25rem] ${PokeMenu2 ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-full h-full bg-white ${PokeMenu2 ? 'opacity-0' : 'opacity-90'} absolute duration-[4s]`}></div>
        </div>
        <div className={`lg:w-[1.4rem] lg:h-[1.4rem] rounded-full bg-white/20 absolute z-50 top-[2.4rem] left-[12.25rem] ${PokeMenu3 ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-full h-full bg-white ${PokeMenu3 ? 'opacity-0' : 'opacity-90'} absolute duration-[4s]`}></div>
        </div>
        <div className={`lg:w-[1.4rem] lg:h-[1.4rem] rounded-full bg-white/20 absolute z-50 top-[2.4rem] left-[14.25rem] ${PokeMenu4 ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`w-full h-full bg-white ${PokeMenu4 ? 'opacity-0' : 'opacity-90'} absolute duration-[4s]`}></div>
        </div>

        <div className={`bg-slate-900 left-[10vw] md:left-[90px] top-[29.2vw] w-[29.5vw] md:w-[28.8vw] h-[21.7vw] lg:w-[17rem] lg:h-[12.03rem] rounded-lg absolute z-40 lg:top-[12.85rem] lg:left-[6.1rem] ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`lg:w-[3rem] lg:h-[30rem] bg-white rotate-45 ${PokeMenu2 ? 'left-[130%]' : 'left-[-100%]'} top-[-7rem] absolute duration-1000`}></div>
        </div>

        <div className={`mt-[17rem] bg-slate-900 left-[10vw] md:left-[90px] top-[29.2vw] w-[29.5vw] md:w-[28.8vw] h-[12vw] lg:w-[20rem] lg:h-12 rounded-md absolute z-40 lg:top-[12.85rem] lg:left-[4.7rem] text-slate-300 ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none capitalize justify-center flex items-center text-xl`}>
          <p>{pokemon.name}</p>
        </div>

        <div className={`bg-slate-900 w-[29vw] h-[7vw] top-[28vw] right-[-32vw] lg:top-[11.9rem] lg:right-[-9.8rem] lg:w-[17rem] lg:h-[4.38rem] rounded-md absolute z-50 ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`lg:w-[3rem] lg:h-[30rem] bg-white rotate-45 ${PokeMenu2 ? 'left-[130%]' : 'left-[-100%]'} top-[-7rem] absolute duration-[2.5s]`}></div>
        </div>

        <Image className={`absolute z-30 ${openPokedex && 'h-[80vw] ml-[50vw] lg:h-[45rem] w-0 lg:ml-[27rem]'} duration-300`} width={500} height={900} alt="" src={'/tamp.png'} onClick={()=>setOpenPokedex(true)}/>
        <Image className={`absolute z-40 h-[80vw] lg:h-[45rem] ${!PokeMenu ? 'w-0' : 'w-[60vw] lg:w-[31rem]'} ml-[43.5vw] md:ml-[40.2vw] lg:ml-[25.75rem] duration-300`} width={500} height={900} alt="" src={'/open.png'} onClick={()=>setOpenPokedex(true)}/>
        <Image className="absolute z-20 h-[80vw] lg:h-[45rem]" width={500} height={900} alt="" src={'/front.png'}/>
      </div>      
    </div>
    </>
  );
}
