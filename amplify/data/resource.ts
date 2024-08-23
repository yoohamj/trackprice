import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Product: a.model({
    productId: a.id(),
    productName: a.string(),
    productDescription: a.string(),
    category: a.string(),
    brand: a.string(),
    imageUrl: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    priceTrackings: a.hasMany('PriceTracking', 'productId'),
  }),
  Website: a.model({
    websiteId: a.id(),
    websiteName: a.string(),
    websiteUrl: a.string(),
    logoUrl: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    priceTrackings: a.hasMany('PriceTracking', 'websiteId'),
  }),
  PriceTracking: a.model({
    trackingId: a.id(),
    productId: a.id(),
    websiteId: a.id(),
    price: a.float(),
    currency: a.string(),
    priceUrl: a.string(),
    isAvailable: a.boolean(),
    trackedAt: a.datetime(),
    product: a.belongsTo('Product', 'productId'),
    website: a.belongsTo('Website', 'websiteId'),
  }),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
