export default async function ProjectDetailPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string; slug: string }>;
}>) {
  const { slug } = await params;

  return (
    <main>
      <h1>Project Detail</h1>
      <p>This page is not implemented yet.</p>
      <p>Temporary project slug: {slug}</p>
    </main>
  );
}
