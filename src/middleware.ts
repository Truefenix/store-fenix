// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Se não tiver token, redireciona para /sign-in
  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // Se tiver token, permite seguir
  return NextResponse.next();
}

// Aplica o middleware somente nas rotas protegidas
export const config = {
  matcher: ['/dashboard/:path*'], // protege todas as rotas em /dashboard
};
