# Curso — Atendimento com IA no WhatsApp

Front-end Next.js (App Router) da plataforma de vídeo do curso. UI preto e branco alinhada ao Figma; dados mock locais; progresso de aulas em `localStorage`.

## Rodar (na sua máquina)

Requisitos: **Node.js ≥ 20.9** (Next 16) e npm. Este app é uma pasta separada do ASA — rode os comandos **dentro** de `curso-atendimento-ia/`.

```bash
git fetch origin
git checkout cursor/curso-atendimento-ia-7c22   # ou a branch/PR do curso
cd curso-atendimento-ia
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) **no seu browser local**.

> `localhost:3000` de um Cloud Agent **não** abre no seu laptop — é a VM do agente. Clone o repo e rode `npm run dev` aí.

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

## Escopo

- Mock em `src/data/course.ts` e `src/data/profile.ts`
- Conclusão de aulas no cliente (`src/lib/completion.tsx`)
- Header: logo · Trilhas/Suporte · Contratar Automação · avatar (dropdown: Perfil · Configurações)
- `/configuracoes`: dados mock + toggle claro/escuro (persistido em localStorage)
- Sem auth, banco ou integrações Evolution/Typebot
