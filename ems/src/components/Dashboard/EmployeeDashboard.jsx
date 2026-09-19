import { LogOut } from "lucide-react";

const EmployeeDashboard = () => {
  const overview = [
    {
      count: 4,
      title: "New Task",
      color: "bg-blue-900/60",
    },
    {
      count: 4,
      title: "Assigned",
      color: "bg-lime-900/60",
    },
    {
      count: 4,
      title: "Completed",
      color: "bg-green-900/60",
    },
    {
      count: 4,
      title: "Pending",
      color: "bg-orange-900/60",
    },
    {
      count: 4,
      title: "Failed",
      color: "bg-rose-900/60",
    },
    {
      count: 4,
      title: "Rejected",
      color: "bg-red-900/60",
    },
  ];

  return (
    <div className="min-h-screen w-full text-neutral-200">
      {/* Header */}
      <header className="mt-3 flex h-14 w-full items-center justify-between rounded-lg border border-neutral-700 bg-neutral-900 px-5 shadow-md">
        <div>
          <h2 className="font-medium text-neutral-200">Task Manager</h2>
          <p className="-mt-1 text-xs text-neutral-500">Admin Panel</p>
        </div>

        <button className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-800 hover:text-white">
          <LogOut size={16} />
          Logout
        </button>
      </header>

      {/* Greeting */}
      <section className="mt-6">
        <p className="text-lg text-neutral-400">Hello,</p>
        <p className="text-3xl font-medium text-white">
          Rohan 👋
        </p>
      </section>

      {/* Overview */}
      <section className="my-6 w-full">
        <h3 className="mb-3 text-2xl font-medium text-white">
          Overview
        </h3>

        <div className="flex w-full gap-3 overflow-x-auto pb-2 scrollbar-none">
          {overview.map((item) => (
            <div
              key={item.title}
              className={`min-w-[169px] rounded-lg border border-white/5 p-4 ${item.color} transition hover:brightness-110`}
            >
              <p className="text-3xl font-bold text-white">
                {item.count}
              </p>

              <p className="mt-1 text-sm font-medium text-neutral-200">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmployeeDashboard;