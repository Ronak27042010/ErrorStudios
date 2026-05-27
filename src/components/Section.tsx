export default function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="section-title mb-10">{title}</h2>
      {children}
    </section>
  );
}
