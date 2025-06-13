'use client';

import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Entrada from './Entrada';

type EntradaProps = {
  mode: 'sign-in' | 'Login' | 'Sign In'; // ou string
  children?: React.ReactNode;
};

export default function AuthLoginEntrada({ mode, children }: EntradaProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const entrada = new Entrada(email, senha);
    const result = await entrada.submit();

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
      <button type="submit">Entrar</button>
      {children}
    </form>
  );
}
