# Usaremos React Hook Form

 - [Link do ShadCn React Hook Form](https://ui.shadcn.com/docs/components/form)

 - [Link da Instação do Shadcn](https://ui.shadcn.com/docs/installation)

Os formulários são complicados. Eles são uma das coisas mais comuns que você criará em um aplicativo da Web, mas também uma das mais complexas.

Formulários HTML bem projetados são:

Bem estruturado e semanticamente correto.
Fácil de usar e navegar (teclado).
Acessível com atributos ARIA e rótulos adequados.
Tem suporte para validação do lado do cliente e do servidor.
Bem estilizado e consistente com o resto do aplicativo.

## Install - npm
[Link Shadcn Install Next](https://ui.shadcn.com/docs/installation/next)

### !Aviso - Precisa ter tailwind css instalado.
````
1. npx shadcn@latest init
2. npx shadcn@latest add form
3. npx shadcn@latest add input
````
 - Depois da instalação ele cria a pasta src/components/ui/
 - ui/ > tem 3 arquivos (button, form, label).
___

## zod - para tipar o formulário

````
"use client"

import { z } from "zod"
````
___

## Exemplo de uso:

````
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
````
___