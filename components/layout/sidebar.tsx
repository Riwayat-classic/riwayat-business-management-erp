import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Branches", href: "/dashboard/branches" },
  { name: "Employees", href: "/dashboard/employees" },
  { name: "Customers", href: "/dashboard/customers" },
  { name: "Products", href: "/dashboard/products" },
  { name: "Inventory", href: "/dashboard/inventory" },
  { name: "Sales", href: "/dashboard/sales" },
  { name: "Tailoring", href: "/dashboard/tailoring" },
  { name: "Reports", href: "/dashboard/reports" },
  { name: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#1B1B1B] text-white border-r border-gray-800">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-[#C8A45D]">
          Riwayat ERP
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Business Management
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block w-full rounded-lg px-4 py-2 text-left transition-colors hover:bg-[#7A0019]"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}