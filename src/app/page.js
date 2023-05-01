import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';

const DATABASE_PATH = path.join(process.cwd(), 'src/database.json');

import Counter from '../components/Counter';

export default function Home() {
  // HACK: Opt into “on-demand” SSR rendering
  const cookieStore = cookies();

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
