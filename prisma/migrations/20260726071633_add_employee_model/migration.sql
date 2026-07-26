-- CreateEnum
CREATE TYPE "EmployeeType" AS ENUM ('ADMIN', 'MANAGER', 'SALES', 'CASHIER', 'TAILOR', 'KARIGAR', 'HELPER');

-- CreateEnum
CREATE TYPE "SalaryType" AS ENUM ('MONTHLY', 'DAILY', 'PER_PIECE');

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "employeeCode" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cnic" TEXT,
    "address" TEXT,
    "employeeType" "EmployeeType" NOT NULL,
    "designation" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "salaryType" "SalaryType" NOT NULL,
    "basicSalary" DECIMAL(12,2) NOT NULL,
    "commissionPercent" DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    "joinDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "branchId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_employeeCode_key" ON "employees"("employeeCode");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
