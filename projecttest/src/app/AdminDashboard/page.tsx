'use client'
import { useRouter } from "next/navigation"
import GsapDemo from "../components/Gsap/GsapDemo"
export default function DashboardPage() {
  const router = useRouter()
  return <div className="space-y-4 border-b-amber-950">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="p-4 mr-4 bg-amber-950">🧾 Total Orders: 1,024</div>
        <div className="p-4 mr-4 bg-amber-950">👤 New Users: 235</div>
        <div className="p-4 mr-4 bg-amber-950">💰 Revenue: $18,432</div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <ul className="mt-2 space-y-2">
          <li className="p-2 bg-gray-100 rounded">✅ User JohnDoe created a post</li>
          <li className="p-2 bg-gray-100 rounded">⚠️ Payment failed for Order #1234</li>
          <li className="p-2 bg-gray-100 rounded">🛒 New order from JaneSmith</li>
        </ul>
        <button className="mt-5 bg-blue-300 h-10 w-36 rounded-4xl text-black" onClick={() => {router.push('/Users')}}>USER-Details</button>
      </div>
      <GsapDemo/> 
    </div>
   
}
