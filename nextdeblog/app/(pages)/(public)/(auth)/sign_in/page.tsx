import { getProviders } from 'next-auth/react';
import Form from './Form';

export default async function Page() {
  const providers = await getProviders();

  return(
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

          <div className="mx-auto max-w-lg rounded-lg border">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}