import { Col, DatePicker, Form, Input, Select } from 'antd';
import dayjs from 'dayjs';
import React, { useCallback } from 'react';

import TagRender from '../TagRender/TagRender';
import type { TInput } from './Inputs';
import styles from './InputStyle.module.scss';
import { useInput } from './useInput';

const { TextArea } = Input;

/** Custom Form input that handles the aparition in one or two columns
 * and @returns different types of inputs depending the type prop passed,
 * by default the input type is text.
 */
export const CustomInput = ({
  required,
  label,
  errorMsg = '',
  placeholder,
  name,
  numberOfColumns = 1,
  type = 'text',
  options,
  aditionalInfo,
}: TInput.Component) => {
  const { columnsWidthBySize, getValueFromEvent, rules, className } = useInput({
    type,
    required,
    errorMsg,
    numberOfColumns,
  });
  const renderInputTypes = useCallback(() => {
    switch (type) {
      case 'date':
        return (
          <DatePicker
            placeholder={placeholder}
            format={(value) => `${dayjs(value).format('DD MMM YYYY')}`}
          />
        );
      case 'select':
        return (
          <Select
            size="large"
            maxTagCount="responsive"
            optionFilterProp="children"
            placeholder={placeholder}
            options={options}
          />
        );
      case 'textArea':
        return <TextArea size="large" placeholder={placeholder} />;
      case 'multiSelect':
        return (
          <Select
            mode="multiple"
            options={options}
            size="large"
            placeholder={placeholder}
            tagRender={TagRender}
            style={{ height: 'fit-content' }}
            className={`select_assigned_buyers`}
            filterOption={(input, option: any) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              ((optionA?.label as string) ?? '')
                .toLowerCase()
                .localeCompare(((optionB?.label as string) ?? '').toLowerCase())
            }
          />
        );
      default:
        return <Input type="text" size="large" placeholder={placeholder} />;
    }
  }, [type, placeholder, options]);

  return (
    <Col {...columnsWidthBySize}>
      <Form.Item
        help={false}
        className={`${styles.label} ${className}`}
        name={name}
        validateTrigger="onSubmit"
        getValueFromEvent={getValueFromEvent}
        label={label}
        rules={rules}
      >
        {renderInputTypes()}
      </Form.Item>
      {aditionalInfo && aditionalInfo}
    </Col>
  );
};
