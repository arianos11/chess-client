import React from 'react';
import { Link } from 'react-router-dom';

import './custom-button.styles.scss';

interface IProps {
  children?: React.ReactNode;
  inverted?: boolean;
  text?: string;
  link?: string;
  loading?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({
  children,
  inverted,
  text,
  link,
  loading = false,
  type,
  onClick,
}: IProps) => {
  if (link) {
    return (
      <Link className="custom-button custom-button__link" to={link}>
        {text || children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={`${inverted || loading ? 'inverted' : ''} custom-button`}
      onClick={(e) => onClick(e)}
    >
      {loading ? <i className="gg-spinner-alt" /> : text || children}
    </button>
  );
};

export default CustomButton;
