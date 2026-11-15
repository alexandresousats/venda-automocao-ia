# Curso — Atendimento com IA no WhatsApp

Front-end Next.js (App Router) da plataforma de vídeo do curso. UI preto e branco alinhada ao Figma; dados mock locais; progresso de aulas em `localStorage`.

## Rodar

Requisitos: **Node.js ≥ 20.9** (Next 16) e npm.

```bash
git clone https://github.com/alexandresousats/venda-automocao-ia.git
cd venda-automocao-ia
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no browser.

## Rotas

| Rota | Tela |
|---|---|
| `/` | Home |
| `/trilhas` | Trilhas (4 tracks × 2 aulas) |
| `/aulas/[trackId]/[lessonId]` | Player de aula (play central) |
| `/suporte` | Suporte técnico |
| `/contratar` | Contratar Automação |
| `/planilha` | Planilha de investimento |
| `/perfil` | Perfil (mock) |
| `/configuracoes` | Conta + tema claro/escuro |

## Escopo

- Mock em `src/data/course.ts` e `src/data/profile.ts`
- Conclusão de aulas no cliente (`src/lib/completion.tsx`)
- Header: logo · Trilhas/Suporte · Contratar Automação · avatar (dropdown: Perfil · Configurações)
- `/configuracoes`: dados mock + toggle claro/escuro (persistido em localStorage)
- Sem auth, banco ou integrações Evolution/Typebot

## Nota

Este repositório é o home do front do curso. Não faz parte do monorepo ASA (`alexandresousats/rep-asa`).
