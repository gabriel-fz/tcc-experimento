import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';

import { FeedbackProps, Container } from './styles';

const Feedback: React.FC<FeedbackProps> = ({ action }) => {
  return (
    <Container action={action}>
      <AiOutlineLike size={55} />

      <AiOutlineLike size={55} />
    </Container>
  );
};

export default Feedback;
