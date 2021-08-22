import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  return (
    <main className="max-w-5xl mx-auto">
      <Layout>
        <h1>Protected Page</h1>

        {isLoading && <Loader />}

        {error && (
          <>
            <h4>Error</h4>
            <pre>{error.message}</pre>
          </>
        )}

        {user && (
          <>
            <h4>Profile new</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </>
        )}
      </Layout>
    </main>
  );
}

export const getServerSideProps = withPageAuthRequired();
