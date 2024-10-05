'use client';

import Table from 'components/search/table'
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link"; // Import Link for navigation

Amplify.configure(outputs);

const client = generateClient<Schema>()

export default function Results() {
  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false
    })
  }

  return <div>
    <Table></Table>
      {/* Button to navigate to the item page */}
        <Link href="/item">
        <button className="mt-4 p-2 bg-green-500 text-white rounded">
          Go to Item Page
        </button>
      </Link>
  </div>
  
  
}