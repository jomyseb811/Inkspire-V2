import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>
      <ul className="space-y-4">
        <li><Link href= "/dashboard" className="hover:text-blue-400">Dashboard</Link> </li>
     <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
      <li><Link href="/Users" className="hover:text-blue-400/">User</Link></li>  
        <li><Link href="/Settings">Settings</Link></li>
      </ul>
    </aside>
  );
}
