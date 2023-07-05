import styles from '../JobsExpandableRow.module.scss';

const ExpandedRowContent = ({
  label,
  value,
}: {
  label: string;
  value: any;
}) => {
  return (
    <div className={styles.expandedRowContent}>
      <p className={styles.expandedRowContentItem}>{label}</p>
      <p className={styles.expandedRowContentItemValue}>{value}</p>
    </div>
  );
};

export default ExpandedRowContent;
