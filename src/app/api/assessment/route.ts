import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  // In real-world use, you might save this data to a DB or process it
  console.log('Received assessment data:', body);

  return NextResponse.json({ success: true });
}