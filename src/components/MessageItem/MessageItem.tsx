import { useState } from 'react';
import { doMessage } from '../../apis/doMessage';
import { IMessages } from '../../pages/Messages/Messages.types';
import { DateTime } from 'luxon';
import { AMERICAN_DATE_FORMAT } from '../../constants/dateFormat';
import Snackbar from '../common/Snackbar/Snackbar';
import Loading from '../common/Loading/Loading';
import {
  ButtonPrimaryLink as MailLink,
  ButtonOutlinedDanger as DeleteButton,
} from '../../styles/Button/Button.styles';
import {
  Wrapper,
  DateText,
  Title,
  Row,
  FrontText,
  MessageBox,
  UserDetail,
  ButtonWrapper,
} from './MessageItem.styles';

interface MessageItemProps {
  message: IMessages;
  token: string;
  setReloadMessages: (e: boolean) => void;
  setMessageError: (error) => void;
}

const MessageItem: React.FC<MessageItemProps> = (props) => {
  const { message, token, setReloadMessages, setMessageError } = props;
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const messageDate = DateTime.fromISO(message.created_at).toFormat(
    AMERICAN_DATE_FORMAT
  );

  const handleDeleteMessage = async () => {
    setSuccess(false);
    setMessageError(null);
    setReloadMessages(false);
    const confirm = window.confirm('Are you sure about deleting this message?');
    if (!confirm) return;

    setLoading(true);
    return await doMessage('DELETE', token, setMessageError, message.id).then(
      () => {
        setReloadMessages(true);
        setSuccess(true);
        setLoading(false);
      }
    );
  };

  return (
    <Wrapper>
      {loading && <Loading state={loading} />}
      {success && <Snackbar message="Seccessfully deleted post" />}
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
      <ButtonWrapper>
        <DeleteButton onClick={handleDeleteMessage}>Delete</DeleteButton>
        <MailLink
          href={`mailto:${message.email}?subject=RE: ${message.subject}`}
        >
          Reply
        </MailLink>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MessageItem;
