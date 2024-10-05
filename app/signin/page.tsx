"use client";

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link"; // Import Link for navigation

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>My todos</h1>
          <div>
            🥳 App successfully hosted. Try creating a new todo.
            <br />
            <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
              Review next steps of this tutorial.
            </a>
          </div>
          <button onClick={signOut}>Sign out</button>
          {/* Button to navigate to the item page */}
          {/* Link to navigate to the item page */}
          <Link href="/item">
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">
              Go to Item Page
            </button>
          </Link>
        </main>
      )}
    </Authenticator>
  )
}

