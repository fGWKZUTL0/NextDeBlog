import Header from "@/app/components/public/header/Header"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <main className="w-[90vw] md:w-[70vw] mx-auto">
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-white md:justify-end text-xl font-semibol py-2 w-[90vw] md:w-[70vw] mx-auto">
          <Header />
        </div>
        <div className="mt-20">
          {children}
        </div>
      </main>
    </>
  )
}
