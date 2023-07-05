import { GREEN_50 } from '@/consts/colors';

import type { ISvg } from './ISvg';

const Export: React.FC<ISvg.SvgProps> = ({
  fill = GREEN_50,
  width = 15.86,
  height = 15.83,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.7 6.41683C15.7 6.67516 16.925 8.21683 16.925 11.5918V11.7002C16.925 15.4252 15.4333 16.9168 11.7083 16.9168H6.28335C2.55835 16.9168 1.06668 15.4252 1.06668 11.7002V11.5918C1.06668 8.24183 2.27501 6.70016 5.22501 6.42516M9.00002 11.5002V2.01683M11.7917 3.87516L9.00002 1.0835L6.20835 3.87516"
    />
  </svg>
);

export default Export;
