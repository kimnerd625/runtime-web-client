import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: { crewId: string } }) {
  const { crewId } = context.params;

  if (!crewId) {
    return NextResponse.json({ error: "crewId is required" }, { status: 400 });
  }

  const BASE_URL = `${process.env.BASE_URL}/crews/detail`;

  try {
    const response = await fetch(`${BASE_URL}/${crewId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    const responseData = await response.json();
    return NextResponse.json(responseData);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
