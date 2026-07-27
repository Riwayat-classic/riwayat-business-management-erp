import Link from "next/link";

import { Button } from "@/components/ui/button";

type Employee = {
  id: string;
  employeeCode: string;
  fullName: string;
  department: string;
  designation: string;
  phone: string;
  isActive: boolean;
};

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable({
  employees,
}: EmployeeTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <table className="w-full">
        <thead className="bg-[#7A0019] text-white">
          <tr>
            <th className="px-4 py-3 text-left">
              Employee Code
            </th>

            <th className="px-4 py-3 text-left">
              Name
            </th>

            <th className="px-4 py-3 text-left">
              Department
            </th>

            <th className="px-4 py-3 text-left">
              Designation
            </th>

            <th className="px-4 py-3 text-left">
              Phone
            </th>

            <th className="px-4 py-3 text-center">
              Status
            </th>

            <th className="px-4 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-t"
            >
              <td className="px-4 py-3">
                {employee.employeeCode}
              </td>

              <td className="px-4 py-3">
                {employee.fullName}
              </td>

              <td className="px-4 py-3">
                {employee.department}
              </td>

              <td className="px-4 py-3">
                {employee.designation}
              </td>

              <td className="px-4 py-3">
                {employee.phone}
              </td>

              <td className="px-4 py-3 text-center">
                {employee.isActive ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                    Inactive
                  </span>
                )}
              </td>

              <td className="px-4 py-3 text-center">
                <Link
                  href={`/dashboard/employees/${employee.id}`}
                >
                  <Button
                    size="sm"
                    variant="outline"
                  >
                    View
                  </Button>
                </Link>
              </td>
            </tr>
          ))}

          {employees.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="py-8 text-center text-gray-500"
              >
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}