import { useState } from 'react';
import { doMessage } from '../../apis/doMessage';
import { IMessages } from '../../pages/Messages/Messages.types';
import { DateTime } from 'luxon';
import { AMERICAN_DATE_FORMAT } from '../../constants/dateFormat';
import {
  Wrapper,
  DateText,
  Title,
  Row,
  FrontText,
  MessageBox,
  UserDetail,
} from './MessageItem.styles';

interface MessageItemProps {
  message: IMessages;
  token: string;
  setReloadMessages: (e: boolean) => void;
}

const MessageItem: React.FC<MessageItemProps> = (props) => {
  const { message, token, setReloadMessages } = props;
  const [messageError, setMessageError] = useState<any>(null);
  const messageDate = DateTime.fromISO(message.created_at).toFormat(
    AMERICAN_DATE_FORMAT
  );

  const handleDeleteMessage = async () => {
    setReloadMessages(false);
    const confirm = window.confirm('Are you sure about deleting this message?');
    if (!confirm) return;

    const onDelete: any = await doMessage(
      'DELETE',
      token,
      setMessageError,
      message.id
    ).then(() => setReloadMessages(true));

    console.log('onDelete: ', onDelete);
  };

  return (
    <Wrapper>
      <Title> {message.subject} </Title>
      <DateText> {messageDate} </DateText>
      <MessageBox> {message.message} </MessageBox>
      <Row>
        <FrontText>From: </FrontText>{' '}
        <UserDetail> {message.fullname} </UserDetail>
      </Row>
      <Row>
        <FrontText>Email: </FrontText>{' '}
        <UserDetail> {message.email} </UserDetail>
      </Row>{' '}
      <br />
      <a href={`mailto:${message.email}?subject=RE: ${message.subject}`}>
        Reply
      </a>
      <button onClick={handleDeleteMessage}>Delete</button>
    </Wrapper>
  );
};

export default MessageItem;
