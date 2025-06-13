# Link e Router

 __Link e router é uma propriedade que ao clicar naquilo, ele te manda para a rota do link.__

## 🔗 <Link> (do next/link) → MELHOR para navegação com clique (estático)

### ✅ Use quando:
 - Está construindo interface com links ou botões
 - O botão ou link aparece já com a rota pronta (ex: menu, lista, etc.)
 - Você quer pré-carregamento automático (Next faz isso com <Link>)

### 💡 Exemplo:
````
import Link from 'next/link'

export default function Home() {
  return (
    <Link href="/sign-in">
      <button>Entrar</button>
    </Link>
  )
}
````

### 🧭 router.push() → MELHOR para navegação condicional ou programática

### ✅ Use quando:
 - O botão precisa verificar algo antes de navegar
 - Quer redirecionar depois de um evento (ex: login, submit, autenticação, etc.)
 - Está dentro de uma função (ex: onClick, useEffect, etc.)

````
import { useRouter } from 'next/router'

export default function Botao() {
  const router = useRouter()

  const handleClick = () => {
    // exemplo: só navega se estiver logado
    if (isLoggedIn) {
      router.push('/dashboard')
    } else {
      router.push('/sign-in')
    }
  }

  return <button onClick={handleClick}>Continuar</button>
}
````

## 📦 router - Origem
```ts
import { useRouter } from 'next/router'
```

## 🔍 O que ele faz?

Ele te dá acesso ao objeto `router`, com várias funções e propriedades úteis, como:

| Propriedade/Função        | O que faz                                                       |
| ------------------------- | --------------------------------------------------------------- |
| `router.push('/rota')`    | Navega para outra página (como um link)                         |
| `router.replace('/rota')` | Navega, mas sem adicionar no histórico (sem voltar)             |
| `router.back()`           | Volta uma página no histórico                                   |
| `router.query`            | Acessa parâmetros da URL, como `/post/[id]` → `router.query.id` |
| `router.pathname`         | Mostra a rota atual (ex: `/post/[id]`)                          |
| `router.asPath`           | Mostra o caminho exato da URL (ex: `/post/123?edit=true`)       |

---

## 📌 Exemplos práticos

### ✅ Navegar programaticamente:

```ts
const router = useRouter()

const goToDashboard = () => {
  router.push('/dashboard')
}
```

---

### ✅ Ler parâmetros da URL dinâmica

Arquivo: `pages/post/[id].tsx`

```tsx
import { useRouter } from 'next/router'

export default function PostPage() {
  const router = useRouter()
  const { id } = router.query

  return <p>O ID do post é: {id}</p>
}
```
---

## 🚨 Importante

* `useRouter()` **só pode ser usado dentro de componentes React** (como hooks no client).
* Se você quiser fazer redirecionamentos no **server side**, aí usaria `getServerSideProps` com `redirect`.

---
