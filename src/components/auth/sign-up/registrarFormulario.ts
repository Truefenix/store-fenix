'use client';

import Registro from './Registro';

export async function registrarFormulario(
  email: string,
  senha: string,
  router: any,
) {
  const registro = new Registro(email, senha);
  const result = await registro.submit();

  if (result.success) {
    router.push('/dashboard');
  } else {
    alert(result.error);
  }
}
