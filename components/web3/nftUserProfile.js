import { getSession, signOut } from "next-auth/react";
import Head from 'next/head'


// gets a prop from getServerSideProps
function User({ user }) {
  return (
    <div>

<Head>
        <title>Try Scrolling... | Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>

      </Head>

      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => signOut({ redirect: "/tech/web3-login" })}>Sign out</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/tech/this",
        permanent: false,
      },
    };
  }

  return {
    props: { 
        user: session.user, 
    },
  };
}

export default User;