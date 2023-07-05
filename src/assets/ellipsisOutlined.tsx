import { GREEN_50 } from '@/consts/colors';

import type { ISvg } from './ISvg';

const EllipsisOutlined: React.FC<ISvg.SvgProps> = ({
  fill = GREEN_50,
  width = 12,
  height = 3,
}) => (
  <svg
    width={width}
    data-testid="threeDotsSvg"
    height={height}
    viewBox="0 0 12 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={fill}
      d="M0 1.98218C-2.7674e-09 2.1135 0.0258657 2.24354 0.0761204 2.36486C0.126375 2.48619 0.200035 2.59643 0.292893 2.68928C0.385752 2.78214 0.495991 2.8558 0.617317 2.90606C0.738642 2.95631 0.868678 2.98218 1 2.98218C1.13132 2.98218 1.26136 2.95631 1.38268 2.90606C1.50401 2.8558 1.61425 2.78214 1.70711 2.68928C1.79997 2.59643 1.87362 2.48619 1.92388 2.36486C1.97413 2.24354 2 2.1135 2 1.98218C2 1.85086 1.97413 1.72082 1.92388 1.59949C1.87362 1.47817 1.79997 1.36793 1.70711 1.27507C1.61425 1.18221 1.50401 1.10855 1.38268 1.0583C1.26136 1.00804 1.13132 0.982178 1 0.982178C0.868678 0.982178 0.738642 1.00804 0.617317 1.0583C0.495991 1.10855 0.385752 1.18221 0.292893 1.27507C0.200035 1.36793 0.126375 1.47817 0.0761204 1.59949C0.0258657 1.72082 -2.7674e-09 1.85086 0 1.98218ZM5 1.98218C5 2.24739 5.10536 2.50175 5.29289 2.68928C5.48043 2.87682 5.73478 2.98218 6 2.98218C6.26522 2.98218 6.51957 2.87682 6.70711 2.68928C6.89464 2.50175 7 2.24739 7 1.98218C7 1.71696 6.89464 1.46261 6.70711 1.27507C6.51957 1.08753 6.26522 0.982178 6 0.982178C5.73478 0.982178 5.48043 1.08753 5.29289 1.27507C5.10536 1.46261 5 1.71696 5 1.98218ZM10 1.98218C10 2.24739 10.1054 2.50175 10.2929 2.68928C10.4804 2.87682 10.7348 2.98218 11 2.98218C11.2652 2.98218 11.5196 2.87682 11.7071 2.68928C11.8946 2.50175 12 2.24739 12 1.98218C12 1.71696 11.8946 1.46261 11.7071 1.27507C11.5196 1.08753 11.2652 0.982178 11 0.982178C10.7348 0.982178 10.4804 1.08753 10.2929 1.27507C10.1054 1.46261 10 1.71696 10 1.98218Z"
    />
  </svg>
);

export default EllipsisOutlined;
