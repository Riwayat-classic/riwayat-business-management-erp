export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h2 className="text-xl font-semibold text-[#7A0019]">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome to Riwayat Business Management ERP
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-600">
          Admin
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7A0019] font-semibold text-white">
          A
        </div>
      </div>
    </header>
  );
}