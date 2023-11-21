import { FC } from 'react';
import './button-components.scss';
import classNames from 'classnames';

interface Props {
  content: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const MainButton: FC<Props> = ({ content, className, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames('main-button', className)}
      aria-label={content}
    >
      {content}
    </button>
  );
};

export default MainButton;
