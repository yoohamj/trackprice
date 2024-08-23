import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import { ThreeItemGrid } from '@/components/grid/three-items';
import  Footer  from '@/components/layout/footer'



Amplify.configure(outputs);

const client = generateClient<Schema>();

export const metadata = {
  description: 'Price Tracking website built with Next.js.',
    openGraph: {
      type: 'website'
    }
  };

export default function App() {
  return (
    <>
      <ThreeItemGrid />
      <Footer />
    </>
      )
}

