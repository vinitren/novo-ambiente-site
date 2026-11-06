# Medição do site

Tudo passa pelo `medicao.js`. Os eventos já rodam e vão pro `dataLayer`; as
ferramentas só recebem dado **no domínio oficial** e **com o código preenchido**
em `CONFIG`. Prévia não envia nada. Pra conferir: abrir a página com `?medicao`
no endereço e olhar o console.

## Eventos

| Evento | Quando | O que leva |
|---|---|---|
| `clique_whatsapp` | **O principal.** Qualquer botão de WhatsApp | `local`, `servico`, `publico`, `texto_link` |
| `clique_telefone` | Ligar | `local` |
| `clique_email` | E-mail | `local` |
| `clique_endereco` | Abrir o endereço no mapa | `local` |
| `clique_instagram` | Instagram | `local` |
| `clique_menu` | Link interno do menu | `destino` |
| `rolagem` | Passou de 25, 50, 75 e 100% da página | `porcentagem` |
| `secao_vista` | Uma seção apareceu na tela | `secao` |
| `servico_visto` | Passou o mouse ou focou num serviço | `servico` |
| `antes_depois_usado` | Arrastou o comparador | |
| `pergunta_aberta` | Abriu uma pergunta | `pergunta` |

Todo evento leva também a origem da visita, guardada no primeiro toque:
`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`,
`clique_id` (`google-ads` ou `meta`) e `veio_de` (site de onde a pessoa veio).

Se a visita veio de campanha, a mensagem do WhatsApp já sai com
`(origem: fonte / campanha)` no fim, pra origem aparecer na conversa.

## O que falta pra medir de verdade

1. **Google Analytics:** criar a propriedade na conta deles, com acesso da Trentini, e colar o `G-...` em `CONFIG.ga4`. Marcar `clique_whatsapp` como evento principal. O HTML do site atual cita código do Google (lido em 05/11, sem identificador visível): descobrir se existe conta e de quem é antes de criar outra
2. **Microsoft Clarity:** criar o projeto e colar o código em `CONFIG.clarity`
3. **Search Console:** verificar o domínio e enviar o sitemap novo
4. **Pixel do Meta:** só se forem anunciar. O Vinicius pergunta depois da prévia. O espaço já existe em `CONFIG.metaPixel`
5. **LGPD:** com Analytics e Clarity ligados, entra o aviso de cookies e a página de privacidade antes de ir pro ar

## Antes de ir pro ar

- Tirar `noindex` do `index.html` e a linha "Prévia" do rodapé
- Trocar a legenda do antes e depois pela da obra real
- Trocar os links de serviço pelas páginas de cada um
- Gerar `sitemap.xml` e `robots.txt`, e os redirecionamentos 301 do site antigo
