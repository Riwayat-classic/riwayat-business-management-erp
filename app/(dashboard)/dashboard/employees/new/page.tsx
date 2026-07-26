export default function NewEmployeePage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#7A0019]">
          Add Employee
        </h1>

        <p className="mt-2 text-gray-600">
          Create a new employee for Riwayat ERP.
        </p>
      </div>

      {/* Form Card */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Employee Code */}
          <div>
            <label className="mb-2 block font-medium">
              Employee Code
            </label>

            <input
              type="text"
              className="w-full rounded-lg border p-3"
              placeholder="EMP-0001"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <input
              type="text"
              className="w-full rounded-lg border p-3"
              placeholder="Employee Name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block font-medium">
              Phone
            </label>

            <input
              type="text"
              className="w-full rounded-lg border p-3"
              placeholder="03XXXXXXXXX"
            />
          </div>

          {/* CNIC */}
          <div>
            <label className="mb-2 block font-medium">
              CNIC
            </label>

            <input
              type="text"
              className="w-full rounded-lg border p-3"
              placeholder="XXXXX-XXXXXXX-X"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Address
            </label>

            <textarea
              className="w-full rounded-lg border p-3"
              rows={3}
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-3">
            <button
              type="button"
              className="rounded-lg border px-6 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[#7A0019] px-6 py-3 text-white"
            >
              Save Employee
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}