import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import Layout from "../components/Layout";
import Cta from "../components/Cta";
import Loader from "../components/Loader";

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <div className="">
      <Head>
        <title>Bloom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-5xl mx-auto">
        <Layout>
          {isLoading && <Loader />}

          {error && (
            <>
              <h4>Error</h4>
              <pre>{error.message}</pre>
            </>
          )}

          {user && (
            <>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-6 mb-8 sm:mt-10 sm:mb-10 dark:text-white">
                Welcome! :)
              </h1>
            </>
          )}

          {!isLoading && !error && !user && (
            <>
              <Cta />
            </>
          )}
        </Layout>
      </main>
    </div>
  );
}
