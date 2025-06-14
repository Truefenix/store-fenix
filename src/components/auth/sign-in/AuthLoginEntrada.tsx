'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { entradaFormulario } from './entradaFormulario';

type EntradaProps = {
  mode: 'sign-in';
  children?: React.ReactNode;
};

export default function AuthLoginEntrada({ mode, children }: EntradaProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    entradaFormulario(email, senha, router);
  };

  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit">Entrar</button>
      {children}
    </form>
  );
}
