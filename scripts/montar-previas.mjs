// Monta a prévia pra aprovação em aprovar/public/novo-ambiente/<rodada>/.
// Desde a prévia 7 (10/11) é uma versão só, com a entrada do rapel, sem página de apresentação.
// Uso: node scripts/montar-previas.mjs [rodada]
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const rodada = process.argv[2] || 'previa-7';
const destino = join(raiz, '..', 'aprovar', 'public', 'novo-ambiente', rodada);

rmSync(destino, { recursive: true, force: true });
mkdirSync(join(destino, 'assets', 'img'), { recursive: true });
cpSync(join(raiz, 'fonts'), join(destino, 'assets', 'fonts'), { recursive: true });

for (const f of ['estilo.css', 'script.js', 'medicao.js', 'blindagem.js']) cpSync(join(raiz, f), join(destino, 'assets', f));
for (const f of readdirSync(join(raiz, 'img'))) {
  if (!f.endsWith('.json')) cpSync(join(raiz, 'img', f), join(destino, 'assets', 'img', f));
}

const pagina = readFileSync(join(raiz, 'index.html'), 'utf8')
  .replace(/(["' ])img\//g, '$1assets/img/')
  .replaceAll('href="fonts/', 'href="assets/fonts/')
  .replace('href="estilo.css"', 'href="assets/estilo.css"')
  .replace('src="blindagem.js"', 'src="assets/blindagem.js"')
  .replace('src="medicao.js"', 'src="assets/medicao.js"')
  .replace('src="script.js"', 'src="assets/script.js"')
  // Aviso de prévia, logo abaixo do botão da entrada. Só existe aqui, nunca no site no ar.
  .replace(/(Pedir orçamento no WhatsApp<svg aria-hidden="true"><use href="#i-seta"\/><\/svg><\/a>)/,
    '$1\n    <p class="aviso-previa"><strong>Prévia da página principal.</strong> As páginas de vidro, fachada, placa solar, piso e contato vêm depois da aprovação.</p>');
if (!pagina.includes('aviso-previa')) throw new Error('Não achei o botão da entrada pra pôr o aviso de prévia');

writeFileSync(join(destino, 'index.html'), pagina);
console.log('Prévia montada em', destino);
