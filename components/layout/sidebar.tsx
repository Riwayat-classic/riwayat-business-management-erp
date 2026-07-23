export function Sidebar() {
  return (
    <aside className="w-64 bg-[#1B1B1B] text-white h-screen border-r border-gray-800">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-[#C8A45D]">
          Riwayat ERP
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Business Management
        </p>
      </div>

      <nav className="p-4 space-y-2">
        <button className="w-full text-left px-4 py-2 rounded-lg bg-[#7A0019]">
          Dashboard
        </button>
      </nav>
    </aside>
  );
}