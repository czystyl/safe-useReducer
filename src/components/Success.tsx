type SuccessProps = {
  message: string;
};

function Success(props: SuccessProps) {
  return <p className="text-green-500">🎉 {props.message}</p>;
}

export default Success;
