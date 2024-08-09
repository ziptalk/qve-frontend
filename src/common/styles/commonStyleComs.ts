import styled from '@emotion/styled';

export const STCOMBoxWrapper = styled.div`
  border-radius: 40px;
  border: 1px solid #fff;
  background: linear-gradient(
    144deg,
    rgba(255, 255, 255, 0.1) -9.46%,
    rgba(255, 255, 255, 0.25) 115.25%
  );
`;

export const STCOMBlueBtn = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.qve_blue};
  border-radius: 100px;
  ${({ theme }) => theme.fonts.body_2_bold};
  color: ${({ theme }) => theme.colors.white};
`;
