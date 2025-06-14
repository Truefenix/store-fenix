# Estrutura do projeto

````
my-app/
├── .env.local
├── knexfile.ts
├── package.json
├── tsconfig.json
└── src/
    ├── app/
    │   ├── api/
    │   │   ├── auth/
    │   │   │   ├── login/route.ts       # POST: login seguro com JWT
    │   │   │   ├── register/route.ts    # POST: registro
    │   │   │   └── me/route.ts          # GET: dados do usuário autenticado
    │   │   ├── upload/
    │   │   │   └── route.ts             # POST: upload autenticado via Firebase
    │   │   └── users/
    │   │       ├── route.ts             # GET/POST usuários (admin)
    │   │       └── [id]/
    │   │               └── route.ts     # GET/PUT/DELETE usuário específico
    │   │
    │   ├── (auth)/                      # Rotas públicas (sem login)
    │   │       ├── layout.tsx
    │   │       ├── sign-in/
    │   │       │       └── login/page.tsx
    │   │       └── sign-up/
    │   │               └── register/page.tsx
    │   │
    │   ├── dashboard/page.tsx          # Rota protegida por middleware
    │   └── layout.tsx
    │
    ├── components/                     # Botões, campos, layout geral
    │   ├── layout/ ThemeProviderWrapper.tsx
    │   ├── auth/
    │   │   ├── sign-in/
    │   │   │   └── login/page.tsx      # use client, faz fetch para login
    │   │   └── sign-up/
    │   │       └── register/page.tsx
    │
    ├── lib/
    │   ├── auth.ts                     # getUserFromCookie, isAuthenticated
    │   ├── db.ts                       # Knex (Planetscale)
    │   ├── firebase.ts                 # SDK Firebase
    │   ├── upload.ts                   # Envia arquivos p/ Firebase
    │   ├── jwt.ts                      # gerar/verificar JWT
    │   └── rate-limit.ts               # Protege contra brute-force
    │
    ├── middleware.ts                   # JWT middleware global (agora dentro de src/)
    ├── schemas/
    │   └── auth.ts                     # Zod schemas (login, register)
    └── types/
        ├── user.ts
        └── file.ts
````