import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

interface EmployeeDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EmployeeDetailsPage({
  params,
}: EmployeeDetailsPageProps) {
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
      <h1 className="text-3xl font-bold text-[#7A0019]">
        Employee Details
      </h1>

      <p>Employee ID:</p>

      <div className="rounded-lg border bg-white p-6">
        {id}
      </div>
    </div>
  );
}