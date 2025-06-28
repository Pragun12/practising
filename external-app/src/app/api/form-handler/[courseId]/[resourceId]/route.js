import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { courseId, resourceId } = await params;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  //const redirectUrl = request.nextUrl.clone();
  // redirectUrl.pathname = `/${courseId}/${resourceId}`;
  const redirectUrl = new URL(`http://${request.headers.get('host')}/${courseId}/${resourceId}`);
  console.log({ redirectUrl });

  Object.entries({ ...data, targetOrigin: request.headers.get('origin') }).forEach(([key, value]) => {
    redirectUrl.searchParams.set(
      key,
      typeof value === "object" ? JSON.stringify(value) : value
    );
  });

  console.log(`Redirecting to: ${redirectUrl.href}`);

  return NextResponse.redirect(redirectUrl, 302);
} 