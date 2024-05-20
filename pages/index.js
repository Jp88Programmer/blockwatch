import React from "react";

const Home = () => {
  return <></>;
};

export default Home;

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/transactions",
    },
  };
};

// MORALIS_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjkyYjZiMWQ4LTI3OGEtNDE3Yy1hNDI0LWE3NWIwMjE0NGZhZCIsIm9yZ0lkIjoiMzkyMTM1IiwidXNlcklkIjoiNDAyOTMyIiwidHlwZUlkIjoiN2IzODI4NTEtMTU0OC00NmExLTllZTctYzgzNTY0ZDVjODM0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTU2MTk1OTAsImV4cCI6NDg3MTM3OTU5MH0.irvrXZXpkXRqZKCxg8w74F3KQ49QPL3SnhhzS3elFWk
