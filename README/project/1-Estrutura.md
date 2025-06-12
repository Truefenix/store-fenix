# Estrutura do projeto

````
my-app/
├── .env.local                   # Variáveis de ambiente (Firebase, DB, JWT, etc.)
├── knexfile.ts                  # Configuração do Knex para Planetscale
├── package.json
├── tsconfig.json                # Configuração global do TypeScript
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/                  # Rotas de login e registro
│   │   │   │   ├── login/route.ts    # POST: autenticar usuário
│   │   │   │   ├── register/route.ts # POST: criar usuário
│   │   │   ├── upload/               # Upload de arquivos para Firebase
│   │   │   │   └── route.ts          # POST: upload de arquivos (imagem, vídeo, PDF)
│   │   │   └── users/
│   │   │       ├── route.ts          # GET todos usuários / POST novo
│   │   │       └── [id]/
│   │   │           └── route.ts      # GET / PUT / DELETE de usuário
│   │   ├── page.tsx                  # Página inicial ou dashboard
│   │   └── layout.tsx                # Layout global da aplicação
│   ├── components/                  # Componentes UI reutilizáveis (botões, inputs)
│   ├── forms/                       # Formulários com Shadcn (ex: login, upload)
│   ├── lib/
│   │   ├── db.ts                    # Knex conectado ao Planetscale
│   │   ├── firebase.ts              # Configuração do Firebase SDK
│   │   └── upload.ts                # Função que faz upload no Firebase
│   ├── middleware.ts               # (opcional) middleware de auth JWT/session
│   └── types/
│       ├── user.ts                 # Tipos relacionados ao usuário
│       └── file.ts                 # Tipos de arquivos (imagem, vídeo, PDF)

````