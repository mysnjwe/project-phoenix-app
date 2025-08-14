import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Phoenix</title>
        <meta name="description" content="Project Phoenix - Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to Project Phoenix
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#666' }}>
          This is a minimal Next.js application scaffold.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem'
            }}
          >
            Learn Next.js →
          </a>
        </div>
      </main>
    </div>
  )
}
