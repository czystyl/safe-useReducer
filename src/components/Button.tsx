import Loader from './Loader';

type ButtonProps = {
  title: string;
  onClick(): void;
  isActive?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

function Button(props: ButtonProps) {
  const defaultClass =
    'flex min-h-[48px] min-w-[128px] font-semibold px-4 rounded bg-white text-blue-900 shadow-lg transition-opacity justify-center items-center mr-2';

  const selectedClassName =
    !props.isActive || props.disabled ? 'opacity-50 hover:opacity-70' : '';

  return (
    <button
      disabled={props.disabled}
      className={`${defaultClass} ${selectedClassName}`}
      onClick={props.onClick}
      type="submit"
    >
      {props.isLoading ? <Loader /> : props.title}
    </button>
  );
}

export default Button;
