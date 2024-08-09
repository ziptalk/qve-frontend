import styled from '@emotion/styled';
import { VIEW } from '../components/SelectView';
import SelectView from '../components/SelectView';
import BotBoard from '../components/BotBoard';
import { IcSearch, IcSort } from '../assets/0_index';
import { STCOMBoxWrapper } from '../../common/styles/commonStyleComs';

const TradeBots = () => {
  return (
    <StContainer>
      <SelectView view={VIEW.TRADE_BOTS} />
      <StTopContainer>
        <StSearchInput>
          <IcSearch />
          <input type='text' placeholder='Search' />
        </StSearchInput>
        <StSortContainer>
          <SortBtn title='TVL' />
          <SortBtn title='Profit' />
          <SortBtn title='Runtime' />
        </StSortContainer>
      </StTopContainer>

      <StBotsContainer>
        <BotBoard />
        <BotBoard />
      </StBotsContainer>
    </StContainer>
  );
};

const SortBtn = ({ title }: { title: string }) => {
  return (
    <StSortBtn>
      {title}
      <IcSort />
    </StSortBtn>
  );
};

export default TradeBots;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const StTopContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin: 2.4rem 0;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
const StSearchInput = styled(STCOMBoxWrapper)`
  width: 65rem;
  height: 100%;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.not_important};
  padding: 0.75rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  & > input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    height: 100%;
    color: ${({ theme }) => theme.colors.sub_white};
    ${({ theme }) => theme.fonts.body_3};
  }
`;

const StSortContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 1rem;
`;

const StSortBtn = styled(STCOMBoxWrapper)`
  width: fit-content;
  height: 100%;
  border-radius: 10px;
  padding: 0 2.2rem 0 1.6rem;
  ${({ theme }) => theme.fonts.body_3m};
  gap: 0.7rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBotsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
