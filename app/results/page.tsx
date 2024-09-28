'use client';

import Table from 'components/search/table'
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

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
    <button onClick={createTodo}>Add new todo</button>
  </div>
}