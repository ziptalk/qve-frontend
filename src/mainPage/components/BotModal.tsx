import styled from '@emotion/styled';
import React from 'react';

const BotModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <StBackground>
      <StWrapper>모달모달ㄷ</StWrapper>
      <button onClick={onClose}></button>
    </StBackground>
  );
};

export default BotModal;

const StBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StWrapper = styled.div`
  width: 56rem;
  height: 74.4rem;
  border-radius: 16px;
`;
