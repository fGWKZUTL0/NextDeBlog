export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <main className="mx-6">
        <div className="md:w-[70vw] md:mx-auto">
            {children}
        </div>
      </main>
    </>
  )
}
