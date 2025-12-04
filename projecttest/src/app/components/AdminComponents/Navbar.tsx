export default function Navbar() {
  return (
    <nav className="h-16 bg-black shadow px-6 flex items-center justify-between"> 
      <h1 className="text-lg font-bold">Admin Panel</h1>
      <button className="text-blue-600 font-semibold">Logout</button>
    </nav>
  );
}
