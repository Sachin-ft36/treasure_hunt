const AnswerButton = ({ letter, answer }) => {
  return (
    <button
      className="flex flex-1 gap-10 px-3 py-3.5 bg-white rounded-lg border border-solid border-neutral-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
      aria-label={`Option ${letter}: ${answer}`}
    >
      <span className="tracking-wider text-zinc-800">{letter}.</span>
      <span className="text-zinc-800">{answer}</span>
    </button>
  );
};

export default AnswerButton;
