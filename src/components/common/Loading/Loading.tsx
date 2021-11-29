import { Container, BoxWrapper, Progressbar } from './Loading.styles';

interface LoadingProps {
  state: boolean;
}

const Loading: React.FC<LoadingProps> = ({ state }) => {
  return (
    <Container state={state}>
      <BoxWrapper>
        <Progressbar />
      </BoxWrapper>
    </Container>
  );
};

export default Loading;
