const topics = [
  { title: 'Differential Privacy', description: 'Learn how to add calibrated noise to protect individual records.' },
  { title: 'Secure MPC', description: 'Run analytics across parties without exposing raw data.' },
  { title: 'Zero-Knowledge Proofs', description: 'Verify compliance without revealing underlying data.' },
];

export function FeaturedTopics() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {topics.map((topic) => (
        <div key={topic.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{topic.description}</p>
        </div>
      ))}
    </div>
  );
}
