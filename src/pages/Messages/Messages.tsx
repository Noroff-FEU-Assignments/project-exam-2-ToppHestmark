import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { doMessage } from '../../apis/doMessage';
import { Heading, ErrorModal, MessageItem } from '../../components';
import { IMessages } from './Messages.types';
import { Container } from './Messages.styles';

const Messages = () => {
  const history = useHistory();
  const [auth] = useContext<any>(AuthContext);
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [messageError, setMessageError] = useState<any>(null);
  const [reloadMessages, setReloadMessages] = useState<boolean>(false);
  const token = auth?.jwt;
  const sortedMessages = messages?.sort(
    (a, b) =>
      Number(new Date(b.published_at)) - Number(new Date(a.published_at))
  );

  !auth && history.push('/');

  useEffect(() => {
    (async (): Promise<void> => {
      setMessageError(null);
      const allMessages: any = await doMessage('GET', token, setMessageError);
      setMessages(allMessages);
    })();
  }, [reloadMessages]);

  if (messageError)
    return (
      <ErrorModal error={messageError} message={messageError?.statusText} />
    );

  return (
    <Container>
      <Heading align="center">{messages?.length} messages in total</Heading>

      {sortedMessages?.map((message, idx) => (
        <MessageItem
          key={idx}
          message={message}
          token={token}
          setReloadMessages={setReloadMessages}
          setMessageError={setMessageError}
        />
      ))}
    </Container>
  );
};

export default Messages;
