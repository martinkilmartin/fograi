import { BRAND } from '@constants/CONTENT';

const Copyright = (): JSX.Element => (
  <p>{`© ${new Date().getFullYear()} 🇮🇪 ${BRAND} 🇨🇦`}</p>
);

export default Copyright;
