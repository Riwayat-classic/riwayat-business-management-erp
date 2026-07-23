import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#7A0019]">
          Welcome to Riwayat ERP
        </h1>

        <p className="mt-4 text-gray-600">
          Foundation is ready. Dashboard development starts here.
        </p>
      </div>
    </DashboardLayout>
  );
}