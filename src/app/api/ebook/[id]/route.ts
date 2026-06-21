import { NextResponse } from "next/server";
import { allBooks } from "@/data/books";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const bookId = parseInt(id);
  const book = allBooks.find((b) => b.id === bookId);
  
  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }
  
  return NextResponse.json(book);
}
