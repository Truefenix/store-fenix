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
    │   │           └── route.ts         # GET/PUT/DELETE usuário específico
    │   ├── (auth)/                      # Rotas públicas (sem login)
    │   │   ├── login/page.tsx
    │   │   └── register/page.tsx
    │   ├── dashboard/page.tsx          # Rota protegida por middleware
    │   ├── layout.tsx
    │   └── middleware.ts               # JWT middleware global
    │
    ├── components/                     # Botões, campos, layout geral
    ├── forms/
    │   ├── LoginForm.tsx               # use client, faz fetch para login
    │   └── RegisterForm.tsx
    ├── lib/
    │   ├── auth.ts                     # getUserFromCookie, isAuthenticated
    │   ├── db.ts                       # Knex (Planetscale)
    │   ├── firebase.ts                 # SDK Firebase
    │   ├── upload.ts                   # Envia arquivos p/ Firebase
    │   ├── jwt.ts                      # gerar/verificar JWT
    │   └── rate-limit.ts               # Protege contra brute-force
    ├── schemas/
    │   └── auth.ts                     # Zod schemas (login, register)
    └── types/
        ├── user.ts
        └── file.ts

````