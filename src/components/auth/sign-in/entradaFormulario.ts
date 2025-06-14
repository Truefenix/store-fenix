'use client';

import Entrada from './Entrada';

export async function entradaFormulario(
  email: string,
  senha: string,
  router: any,
) {
  const entrada = new Entrada(email, senha);
  const result = await entrada.submit();

  if (result.success) {
    router.push('/dashboard'); // rota '/dashboard' quando faz login
  } else {
    alert(result.error);
  }
}
