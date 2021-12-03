import { Helmet } from 'react-helmet-async';

interface Props {
  title: string | undefined;
  description: string | undefined;
}

const Head: React.FC<Props> = ({ title, description }) => (
  <Helmet>
    <title>Holidaze | {title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default Head;
