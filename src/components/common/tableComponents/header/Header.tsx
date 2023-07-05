import { Button, Col, Row, Typography } from 'antd';
import router from 'next/router';
import { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { AuthContext } from '@/application/authContext';
import Input from '@/components/common/input/Input';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import {
  SMALL_TABLET_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '@/consts/breakpoints';
import { PERMISSIONS } from '@/consts/permissions';

import styles from './Header.module.scss';
import type { THeader } from './IHeader';

const { Title } = Typography;

/**
 * Header is a reusable Header for the dashboards with a button to add new and a input with a filter option.
 *
 * the reference in the table is used to scroll top when there is an error alert
 *
 * @param type - The role type of the table, or the dashboaard type.
 * @param titleForm - The current page number of the table.
 * @param subTitleForm - Whether the table is currently loading or not.
 * @param hasSearchInput - Boolean that tells me if the component should have an filterInput.
 * @param handleSearchChange = only valid if hasSearchInput prop is true.
 *
 * @returns The JSX element representing the header of the dashboard.
 */
const Header = ({
  type,
  titleForm,
  subTitleForm,
  hasSearchInput,
  handleSearchChange,
}: THeader) => {
  const { user } = useContext(AuthContext);
  const { width = 0 } = useWindowDimensions();

  return (
    <Row className={styles.buttons_and_search}>
      <Col md={18} sm={24} xs={24}>
        <Title level={2} className={styles.buyers__title}>
          {titleForm}
        </Title>
        <div className={styles.form_subtitle}>{subTitleForm}</div>
      </Col>
      <Col md={6} sm={24} xs={24}>
        {hasSearchInput && (
          <div className={styles.search}>
            <Input
              id="search"
              type="text"
              icon="search"
              isLabel={false}
              inputHeight="43px"
              register={() => {}}
              placeholder="Search by"
              inputBackground="transparent"
              inputWidth={width <= TABLET_BREAKPOINT ? '100%' : '273px'}
              onChange={(value) => handleSearchChange(value)}
            />
          </div>
        )}
        <div className={styles.buttons}>
          {user && PERMISSIONS[type].create.includes(user.role) && (
            <Button
              style={{
                width: width <= SMALL_TABLET_BREAKPOINT ? '100%' : 'auto',
              }}
              type="primary"
              size="large"
              htmlType="submit"
              onClick={() => {
                router.push(`/home/${type}/create`);
              }}
            >
              <AiOutlinePlus className={styles.buttons__add_icon} />
              Add {type.substring(0, type.length - 1)}
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Header;
