import { Col } from 'antd';
import type { FC } from 'react';

import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

import CardItem from './cardItem/CardItem';
import styles from './delegateDashboard/delegateDashboard.module.scss';

type MemoizedCardsType = {
  item: any;
  index: any;
  checkedState: any;
  optionHovered: any;
  onClickCard: () => void;
  quantity: number;
};
export const MemoizedCards: FC<MemoizedCardsType> = ({
  item,
  index,
  checkedState,
  optionHovered,
  onClickCard,
  quantity,
}) => {
  const styleHeightCards = (index: number) => {
    return {
      height: checkedState[index]!.status ? 90 : 75,
      alignItems: 'center',
      transition: 'none',
    };
  };
  const { width = 0 } = useWindowDimensions();

  return (
    <Col className={styles.col_item} key={item.key} xs={12} sm={6}>
      <CardItem
        color={
          width >= TABLET_BREAKPOINT ? checkedState[index]!.color : item.color
        }
        quantity={quantity}
        title={item.label}
        status={
          width >= TABLET_BREAKPOINT ? checkedState[index]!.status : false
        }
        onHover={optionHovered}
        style={
          width >= TABLET_BREAKPOINT
            ? styleHeightCards(index)
            : { height: 75, alignItems: 'center' }
        }
        onClick={onClickCard}
        index={index}
      />
    </Col>
  );
};
