import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.join(process.cwd(), 'src/database.json');

import Counter from '../components/Counter';

export default function Home() {
  const { hits } = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf8'));

  const newHits = hits + 1;

  fs.writeFileSync(DATABASE_PATH, JSON.stringify({ hits: newHits }));

  return (
    <main>
      <h1>Hello Next!</h1>
      <Counter />
      <p>You are visitor number {hits}</p>
    </main>
  );
}
