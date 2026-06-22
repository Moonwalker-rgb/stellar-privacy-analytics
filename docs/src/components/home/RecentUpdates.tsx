const updates = [
  { title: 'Gateway key persistence', date: '2026-06-20' },
  { title: 'CI pipeline hardening', date: '2026-06-20' },
  { title: 'Privacy API gateway docs', date: '2026-05-15' },
];

export function RecentUpdates() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Updates</h2>
      <ul className="mx-auto max-w-2xl space-y-3">
        {updates.map((item) => (
          <li
            key={item.title}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm"
          >
            <span className="font-medium text-gray-900">{item.title}</span>
            <span className="text-gray-500">{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
