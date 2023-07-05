// import './input.css';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { IInput } from './IInput';
import classStyle from './input.module.scss';

const Input: FC<IInput.IProps> = (props) => {
  const [showPass, setShowPass] = React.useState(false);

  const {
    icon,
    inputLabel = 'Username',
    isLabel = true,
    labelColor = '#888E95',
    inputWidth = '100%',
    inputHeight = '48px',
    inputColor = '#9FA4A9',
    inputBackground = '',
    borderColor = '#DBDDE0',
    inputBorderRadius = '8px',
    inputFontSize = '16px',
    type = 'text',
    id = 'user',
    onChange = (value) => console.log(value),
    onFocus = () => {},
    onBlur = () => {},
    placeholder = 'example@email.com',
    register = () => {},
    rules = { requiered: false },
  } = props;

  const styles = {
    width: inputWidth,
    height: inputHeight,
    color: inputColor,
    borderRadius: inputBorderRadius,
    fontSize: inputFontSize,
    border: `1px solid ${borderColor}`,
    backgroundColor: inputBackground,
  };

  return (
    <>
      {isLabel && (
        <label
          className={classStyle.input__label}
          htmlFor={id}
          style={{ color: labelColor }}
        >
          {inputLabel}
        </label>
      )}
      <div className={classStyle.input}>
        <input
          type={showPass ? 'text' : type}
          name={id}
          className={classStyle.input__login}
          style={styles}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          data-testid={id}
          {...register(id, rules)}
        />
        {type === 'password' && (
          <span
            className={
              showPass
                ? classStyle.input__show_pass
                : classStyle.input__hidden_pass
            }
            onClick={() => setShowPass(!showPass)}
          >
            <Image
              src={
                showPass
                  ? '/assets/icons/hide_pass.svg'
                  : '/assets/icons/show_pass.svg'
              }
              alt="pass"
              width={20}
              height={20}
            />
          </span>
        )}

        {icon === 'search' && (
          <span className={classStyle.input__show_pass} onClick={() => {}}>
            <Image
              width={20}
              height={20}
              alt="search"
              src={'/assets/icons/search.svg'}
            />
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
