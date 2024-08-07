"use client";

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import { Carousel } from '../components/carousel';
import { ThreeItemGrid } from '../components/grid/three-items';
import Footer from '../components/layout/footer';

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function HomePage() {
  return (
    <>
    <ThreeItemGrid />
    <Carousel />
    <Footer />
  </>
  );
}


