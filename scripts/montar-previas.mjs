// Monta a prévia pra aprovação: uma página de apresentação e as duas opções do
// site, que só mudam a foto da entrada. Sai em aprovar/public/novo-ambiente/<rodada>/.
// Uso: node scripts/montar-previas.mjs [rodada]
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const rodada = process.argv[2] || 'previa-6';
const destino = join(raiz, '..', 'aprovar', 'public', 'novo-ambiente', rodada);

rmSync(destino, { recursive: true, force: true });
mkdirSync(join(destino, 'assets', 'img'), { recursive: true });
cpSync(join(raiz, 'fonts'), join(destino, 'assets', 'fonts'), { recursive: true });

for (const f of ['estilo.css', 'script.js', 'medicao.js']) cpSync(join(raiz, f), join(destino, 'assets', f));
for (const f of readdirSync(join(raiz, 'img'))) {
  if (!f.endsWith('.json')) cpSync(join(raiz, 'img', f), join(destino, 'assets', 'img', f));
}

const base = readFileSync(join(raiz, 'index.html'), 'utf8')
  .replace(/(["' ])img\//g, '$1../assets/img/')
  .replace('href="fonts/', 'href="../assets/fonts/')
  .replace('href="estilo.css"', 'href="../assets/estilo.css"')
  .replace('src="medicao.js"', 'src="../assets/medicao.js"')
  .replace('src="script.js"', 'src="../assets/script.js"');

const ALT_A = 'Rodo abrindo uma faixa de vidro limpo numa fachada suja, com uma araucária refletida';
const ALT_B = 'Técnico em rapel limpando a fachada de vidro de um prédio, com araucárias refletidas no vidro';
const opcaoB = base
  .replaceAll('entrada-janela', 'entrada-rapel')
  .replace(ALT_A, ALT_B)
  .replace('data-entrada="janela"', 'data-entrada="rapel"');

mkdirSync(join(destino, 'a')); mkdirSync(join(destino, 'b'));
writeFileSync(join(destino, 'a', 'index.html'), base);
writeFileSync(join(destino, 'b', 'index.html'), opcaoB);
cpSync(join(raiz, 'apresentacao.html'), join(destino, 'index.html'));
console.log('Prévia montada em', destino);
