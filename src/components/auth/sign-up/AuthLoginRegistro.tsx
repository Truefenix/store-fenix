'use client';

import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Registro from './Registro';

type RegistroProps = {
  mode: 'sign-up';
  children?: React.ReactNode;
};

export default function AuthLoginRegistro({ mode, children }: RegistroProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const registro = new Registro(email, senha);
    const result = await registro.submit();

    if (result.success) {
      router.push('/dashboard');
    } else {
      alert(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
      />
      <button type="submit">Registrar</button>
      {children}
    </form>
  );
}
