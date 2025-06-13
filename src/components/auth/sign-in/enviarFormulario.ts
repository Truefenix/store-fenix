import Entrada from './Entrada';
import { useRouter } from 'next/navigation';

type SubmitProps = {
  router: ReturnType<typeof useRouter>;
  email: string;
  senha: string;
};

export const enviarFormulario = async ({
  router,
  email,
  senha,
}: SubmitProps) => {
  const entrada = new Entrada(email, senha);
  const result = await entrada.submit();

  if (result.success) {
    router.push('/dashboard');
  } else {
    alert(result.error);
  }
};
