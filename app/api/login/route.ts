// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (username === 'azureuser' && password === 'password') {
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
  }
}
