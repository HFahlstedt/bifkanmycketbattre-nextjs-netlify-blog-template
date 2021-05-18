export interface QuestionProps {
  question: string;
  children: React.ReactNode;
}

export default function Question({ question, children }: QuestionProps) {
  return (
    <div className="mt-1 mb-5">
      <div className="has-text-weight-bold mb-2">{question}</div>
      <div className="has-text-grey">{children}</div>
    </div>
  );
}
