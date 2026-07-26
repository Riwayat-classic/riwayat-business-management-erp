export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#7A0019]">
            Employees
          </h1>

          <p className="mt-1 text-gray-600">
            Manage all employees of Riwayat ERP.
          </p>
        </div>

        <button className="rounded-lg bg-[#7A0019] px-5 py-2 font-medium text-white transition hover:bg-[#5F0013]">
          + Add Employee
        </button>
      </div>

      {/* Employee Table */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Code</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Branch</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan={8}
                className="px-6 py-10 text-center text-gray-500"
              >
                No employees found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}