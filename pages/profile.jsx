import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  return (
    <main className="max-w-5xl mx-auto">
      <Layout>
        <h1 className="order-1 text-3xl sm:text-5xl sm:leading-none font-extrabold tracking-tight mb-4">
          Profile
        </h1>

        {isLoading && <Loader />}

        {error && (
          <>
            <h4>Error</h4>
            <pre>{error.message}</pre>
          </>
        )}

        {user && (
          <>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

            <p className="text-lg">Name: {user.name} </p>
            <p className="text-lg">Email: {user.email} </p>
          </>
        )}
      </Layout>
    </main>
  );
}

export const getServerSideProps = withPageAuthRequired();
