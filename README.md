# Curso — Atendimento com IA no WhatsApp

Front-end Next.js (App Router) da plataforma de vídeo do curso. UI preto e branco alinhada ao Figma; dados mock locais; progresso de aulas em `localStorage`.

## Rodar

```bash
cd curso-atendimento-ia
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Rotas

| Rota | Tela |
|---|---|
| `/` | Home |
| `/trilhas` | Trilhas (4 tracks × 2 aulas) |
| `/aulas/[trackId]/[lessonId]` | Player de aula (play central) |
| `/suporte` | Suporte técnico |
| `/contratar` | Contratar Automação |
| `/planilha` | Planilha de investimento |

## Escopo

- Mock em `src/data/course.ts` e `src/data/profile.ts`
- Conclusão de aulas no cliente (`src/lib/completion.tsx`)
- Header: logo · Trilhas/Suporte · Contratar Automação · avatar (dropdown de perfil mock)
- Sem auth, banco ou integrações Evolution/Typebot
