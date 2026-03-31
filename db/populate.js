 

const { Client } = require("pg");

const SQLCategories = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO categories (name) 
VALUES
  ('Frontend'),
  ('Backend'),
  ('Fullstack'),
  ('DevOps');
`;

const SQLTools = `
CREATE TABLE IF NOT EXISTS tools (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  ahref VARCHAR(255),
  category_id INTEGER REFERENCES categories(id)
);

INSERT INTO tools (name, ahref, category_id) 
VALUES
  ('Hammer', 'https://example.com/hammer', 2),
  ('Screwdriver', 'https://example.com/screwdriver', 2),
  ('Wrench', 'https://example.com/wrench', 2),
  ('React', 'https://example.com/react', 1),
  ('Node.js', 'https://example.com/nodejs', 2),
  ('Docker', 'https://example.com/docker', 4),
  ('TypeScript', 'https://example.com/typescript', 1),
  ('Express', 'https://example.com/express', 2),
  ('Kubernetes', 'https://example.com/kubernetes', 4);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:  "postgresql://neondb_owner:npg_msnth9IMJ6vL@ep-fragrant-union-amjjfpip-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
  });
  await client.connect();
  await client.query(SQLCategories);
  await client.query(SQLTools);
  await client.end();
  console.log("done");
}

main();

//  connectionString: process.argv[2] 