import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

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

      <div className="rounded-lg border bg-white p-6">
        <h2 className="text-xl font-semibold text-[#7A0019]">
          Employee Information
        </h2>

        <div className="mt-6 space-y-4">
          <p>
            <strong>Employee Code:</strong>{" "}
            {employee.employeeCode}
          </p>

          <p>
            <strong>Full Name:</strong>{" "}
            {employee.fullName}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {employee.phone}
          </p>
        </div>
      </div>
    </div>
  );
}