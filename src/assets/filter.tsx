import type { ISvg } from './ISvg';

const Filter: React.FC<ISvg.SvgProps> = ({ fill, width, height }) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 10 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke={fill}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.03235 1.39606L1.73933 5.07048M1.46026 1.39606H7.5998C8.11142 1.39606 8.53003 1.81466 8.53003 2.32629V3.34955C8.53003 3.72164 8.29747 4.18675 8.06491 4.41931L6.06491 6.18675C5.78584 6.41931 5.5998 6.88443 5.5998 7.25652V9.25652C5.5998 9.53559 5.41375 9.90768 5.18119 10.0472L4.53003 10.4658C3.92538 10.8379 3.08817 10.4193 3.08817 9.67513V7.21001C3.08817 6.88443 2.90212 6.46582 2.71608 6.23327L0.948634 4.3728C0.716076 4.14024 0.530029 3.72164 0.530029 3.44257V2.3728C0.530029 1.81466 0.948634 1.39606 1.46026 1.39606Z"
    />
  </svg>
);

export default Filter;
