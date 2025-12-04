'use client'
import Link from "next/link";
import ProductCard from "./components/Product";
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter();


  return (
    <div className=" flex align-text-top justify-around">
    {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <main className="mt-16 ">

<button className="px-4 bg-indigo-400 rounded mr-5" onClick={() => router.push('/AdminDashboard')}> !Admin PAge </button>
<Link href={'/Timeline'}>
<button className="bg-emerald-700 rounded-2 px-4 rounded-3xl"> TimeLine Animation </button>
</Link>

<Link href={'/PracticeScroll'}><button className="bg-fuchsia-300  rounded-2xl ml-4 px-4 ">Scroll Section</button></Link>
{/* 
        <h1>haiii mann how are you</h1>
      <Link href="/Users">Users</Link> */}
    
      </main>
      <ProductCard/>
     
    </div>
    // </div>
  );
}
