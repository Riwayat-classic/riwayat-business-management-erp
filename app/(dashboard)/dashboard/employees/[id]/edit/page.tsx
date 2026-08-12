import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { EditEmployeeForm } from "@/components/employees/edit-employee-form";

interface EditEmployeePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditEmployeePage({
  params,
}: EditEmployeePageProps) {
  const { id } = await params;

  const employee = await prisma.employee.findUnique({
    where: {
      id,
    },
  });

  if (!employee) {
    notFound();
  }

  const branches = await prisma.branch.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#7A0019]">
          Edit Employee
        </h1>

        <p className="mt-1 text-muted-foreground">
          Update employee information.
        </p>
      </div>

      <EditEmployeeForm
        employee={{
          id: employee.id,
          employeeCode: employee.employeeCode,
          branchId: employee.branchId,
          fullName: employee.fullName,
          phone: employee.phone,
          cnic: employee.cnic ?? "",
          address: employee.address ?? "",
          employeeType: employee.employeeType,
          designation: employee.designation,
          department: employee.department,
          salaryType: employee.salaryType,
          basicSalary: employee.basicSalary.toString(),
          commissionPercent: employee.commissionPercent.toString(),
          joinDate: employee.joinDate.toISOString().split("T")[0],
          isActive: employee.isActive,
          notes: employee.notes ?? "",
        }}
        branches={branches.map((branch) => ({
          id: branch.id,
          name: branch.name,
        }))}
      />
    </div>
  );
}