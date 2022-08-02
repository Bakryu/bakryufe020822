import styles from "./Button.module.scss";

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  children: string;
}

const Button: React.FC<Props> = ({ children, onClick, className = "" }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
