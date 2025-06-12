# Instalar tailwind para se usar o ShadCn

 - [Segue o Link da instalação](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

## 1. Install Tailwind CSS with Next.js

````
// install tailwind
npm install tailwindcss @tailwindcss/postcss postcss
````

## 2. Criar arquivo > postcss.config.mjs

````
// caminho global do projeto > postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
````

## 3. Arquivo global.css e import > ./src/app/globals.css

````
@import "tailwindcss";
````