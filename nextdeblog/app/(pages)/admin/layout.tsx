import Sidebar from "@/app/components/admin/sidebar/SideBar"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  )
}
