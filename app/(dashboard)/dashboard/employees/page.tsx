import Link from "next/link";

import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";

import { EmployeeTable } from "@/components/employees/employee-table";
export default async function EmployeesPage() {
  const employees = await prisma.employee.findMany({
  orderBy: {
    createdAt: "desc",
  },
});
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#7A0019]">
            Employees
          </h1>

          <p className="text-muted-foreground">
            Manage all employees of Riwayat ERP.
          </p>
        </div>

        <Link href="/dashboard/employees/new">
          <Button>Add Employee</Button>
        </Link>
      </div>

      <EmployeeTable employees={employees} />
    </div>
  );
}