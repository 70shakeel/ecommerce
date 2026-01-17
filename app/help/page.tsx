export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Help Center</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          How can we help you today?
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <p className="text-muted-foreground">
              Browse our frequently asked questions to find quick answers.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Status</h2>
            <p className="text-muted-foreground">
              Track your order and view your purchase history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
