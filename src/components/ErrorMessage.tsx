type ErrorMessageProps = {
  error: string;
};

function ErrorMessage(props: ErrorMessageProps) {
  return <p className="text-red-700">❌ {props.error}</p>;
}

export default ErrorMessage;
