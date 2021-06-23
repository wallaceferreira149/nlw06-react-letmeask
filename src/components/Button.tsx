/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC = (props: ButtonProps) => {
  return <button type="submit" className="button" {...props} />;
};
