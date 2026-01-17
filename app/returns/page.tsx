export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Returns & Exchanges</h1>
      <div className="prose dark:prose-invert max-w-2xl">
        <p className="text-lg mb-6">
          We want you to love your purchase. If you didn't, we'll make it right.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-muted-foreground">
          <li>Returns are accepted within 30 days of purchase.</li>
          <li>Items must be unworn and in original condition.</li>
          <li>Original packaging is required.</li>
        </ul>
        <p>
          To start a return, please contact our support team.
        </p>
      </div>
    </div>
  );
}
