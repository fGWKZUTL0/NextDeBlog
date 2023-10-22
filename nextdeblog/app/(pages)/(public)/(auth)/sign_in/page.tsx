import { getProviders } from 'next-auth/react';
import Form from './Form';
import Link from 'next/link';

export default async function Page() {
  const providers = await getProviders();

  return(
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

          <div className="mx-auto max-w-lg rounded-lg border py-2">
            <Form />
            <div className="flex justify-center">
              <Link href="/" className="text-blue-600">ログインせずに投稿を見る</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}