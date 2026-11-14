export function CompletionCheck({
  completed,
  size = 28,
}: {
  completed: boolean;
  size?: 24 | 28;
}) {
  if (completed) {
    return (
      <span
        aria-hidden
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#17a34a] text-white"
        style={{ width: size, height: size }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7.2L5.6 9.8L11 4.2"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  const empty = size === 28 ? 24 : 24;
  return (
    <span
      aria-hidden
      className="inline-block shrink-0 rounded-full border-[1.5px] border-[#e6e6e6] bg-white"
      style={{ width: empty, height: empty }}
    />
  );
}
