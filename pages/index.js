
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pokemon, setPokemon] = useState([]);
  const [openPokedex, setOpenPokedex] = useState(false);
  const [PokeMenu, setPokeMenu] = useState(false);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [PokeMenu2, setPokeMenu2] = useState(false);
  const [PokeMenu3, setPokeMenu3] = useState(false);
  const [PokeMenu4, setPokeMenu4] = useState(false);
  const [description, setDescription] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setPage((prev) => (prev === 1 ? 649 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setPage((prev) => (prev === 649 ? 1 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


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
      const types = data.types.map((t) => t.type.name);
      setPokeTypes(types)
      setPokemon(data)
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
    console.log(page)

    const fetchDescription = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${page}`)
      const data = await res.json()

      const englishDescriptions = data.flavor_text_entries
        .filter((entry) => entry.language.name === 'en')
        .map((entry) => entry.flavor_text.replace(/\s+/g, ' ').replace(/[\n\f]/g, ' '))
        .join(' ')

      setDescription(englishDescriptions)
    }

    fetchDescription()

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

        <div className={`bg-slate-900 left-[10vw] md:left-[90px] top-[29.2vw] w-[29.5vw] md:w-[28.8vw] h-[21.7vw] lg:w-[17rem] lg:h-[12.03rem] rounded-lg absolute z-40 lg:top-[12.85rem] lg:left-[6.1rem] ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none flex justify-center place-items-center`}>
            <Image className={`${PokeMenu3 ? 'opacity-100' : 'opacity-0'} duration-1000 w-[45%] absolute z-40`} src={pokemon?.sprites?.versions?.['generation-v']?.['black-white']?.['animated']?.front_default || ''} alt="" width={300} height={300}/>
            <Image className={`${PokeMenu3 ? 'opacity-100' : 'opacity-0'} duration-1000 blur-xl w-[50%] absolute z-30`} src={pokemon?.sprites?.versions?.['generation-v']?.['black-white']?.['animated']?.front_default || ''} alt="" width={300} height={300}/>
            <div className={`duration-300 lg:w-[3rem] lg:h-[30rem] z-50 bg-white rotate-45 ${PokeMenu2 ? 'left-[130%]' : 'left-[-100%]'} top-[-7rem] absolute duration-1000`}></div>
            <Image className={`${PokeMenu3 ? ' opacity-80' : 'opacity-0'} duration-1000 absolute object-cover scale-800 w-full h-full`} src='/background.gif' alt="" width={300} height={300}/>
        </div>

        <div className={`pointer-events-none mt-[30vw] lg:mt-[17rem] pixel bg-gray-300 left-[8.6vw] md:left-[90px] top-[29.2vw] w-[33vw] md:w-[28.8vw] h-[7vw] lg:w-[20rem] lg:h-12 rounded-md lg:rounded-t-md absolute z-40 lg:top-[12.85rem] lg:left-[4.7rem] text-slate-700 ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 capitalize justify-center flex items-center text-sm md:text-xl`}>
          <div className={`-translate-y-1/2 lg:bg-gray-400 lg:left-3 top-[-5vw] lg:top-1/2 m-auto ml-auto border-gray-400 lg:border py-05 text-slate-700 font-bold w-auto px-2 min-w-12 rounded-full absolute z-40 ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden capitalize justify-center flex items-center text-base`}>
            <p>{page}</p>
          </div>
          <p>{pokemon.name}</p>
        </div>

        <div className={`pointer-events-none mt-[38vw] md:mt-[33vw] lg:mt-[19.5rem] gap-1 text-slate-200 pixel left-[10vw] md:left-[90px] top-[29.2vw] w-[29.5vw] md:w-[28.8vw] h-[12vw] lg:w-[20rem] lg:h-12 rounded-md absolute z-40 lg:top-[12.85rem] lg:left-[4.7rem] text-slate-300 ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden capitalize justify-center md:flex items-center text-base`}>
          {pokeTypes.map((type) => (
            <div key={type} className="text-xs lg:text-base w-full md:pt-2 md:pb-1 mt-0.5 md:mt-5 lg:mt-0 px-3 py-0 border-slate-300 border rounded-md lg:rounded-b-md">{type}</div>
          ))}
        </div>

        <div className={`mt-[70vw] md:mt-[44vw] left-1/2 ml-[-5vw] md:ml-0 lg:mt-[25rem] pixel bg-slate-900 md:left-[90px] top-[29.2vw] h-[12vw] w-full md:w-[28.8vw] lg:w-[20rem] md:h-12 rounded-md absolute z-40 lg:top-[12.85rem] lg:left-[4.7rem] text-slate-900 border border-red-900 ${PokeMenu ? 'opacity-100' : 'pointer-events-none opacity-0'} duration-1000 overflow-hidden capitalize justify-center flex items-center text-xl`}>
          <div className="text-xs lg:text-base flex justify-center place-items-center select-none bg-[#e3425a] hover:bg-[#eb7183] duration-300 text-base w-1/2 h-full cursor-pointer gap-2" onClick={()=> {page === 1 ? setPage(649) : setPage(page - 1)}}><Icon.ArrowLeft/> Preview</div>
          <div className="w-[1px] h-full bg-red-900"></div>
          <div className="text-xs lg:text-base flex justify-center place-items-center select-none bg-[#e3425a] hover:bg-[#eb7183] duration-300 text-base w-1/2 h-full cursor-pointer gap-2" onClick={()=> {page === 649 ? setPage(1) : setPage(page + 1)}}>Next <Icon.ArrowRight/></div>
        </div>

        <div className={`${PokeMenu3 ? 'bg-slate-200' : 'bg-slate-900'} flex text-xs md:text-base lg:text-xl capitalize justify-center place-items-center w-[37vw] md:w-[33vw] h-[7vw] top-[28vw] right-[-36vw] md:right-[-30vw] lg:top-[11.9rem] lg:right-[-9.8rem] lg:w-[17rem] lg:h-[4.38rem] rounded-md absolute z-50 ${PokeMenu ? 'opacity-100' : 'opacity-0'} duration-1000 overflow-hidden pointer-events-none`}>
          <div className={`lg:w-[3rem] lg:h-[30rem] bg-white rotate-45 ${PokeMenu2 ? 'left-[130%]' : 'left-[-100%]'} top-[-7rem] absolute duration-[2.5s]`}></div>
          <h1 className={`font-bold pixel text-slate-800 duration-1000 ${PokeMenu3 ? 'opacity-100' : 'opacity-0'}`}>About {pokemon.name}</h1>
        </div>

        <div className={`text-xs md:text-base lg:text-base w-[35vw] top-[38vw] lg:top-[17.5rem] right-[-34vw] md:right-[-31vw] lg:right-[-11rem] lg:w-[20rem] rounded-md absolute z-50 ${PokeMenu3 ? 'h-[40vw] lg:h-[22rem] p-2' : 'h-0 p-0 px-2'} duration-1000 overflow-y-scroll`}>
          {description}
        </div>

        <Image className={`cursor-pointer absolute z-30 ${openPokedex && 'h-[80vw] ml-[50vw] lg:h-[45rem] w-0 lg:ml-[27rem] pointer-events-none'} duration-300`} width={500} height={900} alt="" src={'/tamp.webp'} onClick={()=>setOpenPokedex(true)}/>
        <Image className={`absolute z-40 h-[80vw] lg:h-[45rem] ${!PokeMenu ? 'w-0' : 'w-[60vw] lg:w-[31rem] pointer-events-none'} ml-[43.5vw] md:ml-[40.2vw] lg:ml-[25.75rem] duration-300`} width={500} height={900} alt="" src={'/open.webp'} onClick={()=>setOpenPokedex(true)}/>
        <Image className="pointer-events-none absolute z-20 h-[80vw] lg:h-[45rem]" width={500} height={900} alt="" src={'/front.webp'}/>
      </div>      
    </div>
    </>
  );
}