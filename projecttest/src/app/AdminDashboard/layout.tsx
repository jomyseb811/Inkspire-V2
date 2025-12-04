import Navbar from "../components/AdminComponents/Navbar";
import Sidebar from "../components/AdminComponents/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex flex-col flex-1 ">
        <Navbar/>
        <main className="p-6 bg-amber-900 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
