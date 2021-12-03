import { Container, HeadingText } from './Heading.styles';

interface HeadingProps {
  children: React.ReactNode;
  align: 'flex-start' | 'center' | 'flex-end';
}

const Heading: React.FC<HeadingProps> = ({ children, align }) => {
  return (
    <Container align={align}>
      {' '}
      <HeadingText> {children} </HeadingText>{' '}
    </Container>
  );
};

export default Heading;
