export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#7A0019]">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome to Riwayat Business Management ERP.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm text-gray-500">
            Total Employees
          </h3>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm text-gray-500">
            Total Customers
          </h3>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm text-gray-500">
            Total Products
          </h3>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm text-gray-500">
            Total Sales
          </h3>

          <p className="mt-3 text-3xl font-bold">
            0
          </p>
        </div>
      </div>
    </div>
  );
}