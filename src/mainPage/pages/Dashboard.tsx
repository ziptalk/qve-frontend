import { useState } from 'react';
import SelectView from '../components/SelectView';
import { VIEW } from '../components/SelectView';
import styled from '@emotion/styled';
import { DASHBORADTABLEHEADER } from '../constants/DASHBOARD';
import { MOCK_DASHBOARD } from '../constants/mainPage_MOCK';
import {
  STCOMBlueBtn,
  STCOMBoxWrapper,
  STCOMGreyBtn,
} from '../../common/styles/commonStyleComs';
import { IDashboard } from '../types/dashboardType';
import { IcStrokeLogo, onBoardingCube } from '../../common/assets/0_index';
import { useNavigate } from 'react-router-dom';
import ConnectWallet from '../../wallet/ConnectWallet';

const ShowDashboardData = ({ data }: { data: IDashboard }) => {
  const TOKEN = 'NTRN';
  return (
    <>
      <StTotalContainer>
        <div>
          <label>Total Balance</label>
          <StTotalTokenValue>{data.total_balance}</StTotalTokenValue>
          <StTotalDollarValue>≈ $4,254.40</StTotalDollarValue>
        </div>
        <div>
          <label>Total Profit</label>
          <StTotalTokenValue>
            <StPositiveColor>+ {data.total_profit} NTRN</StPositiveColor>
          </StTotalTokenValue>
          <StTotalDollarValue>
            <StPositiveColor>≈ $450.00</StPositiveColor>
          </StTotalDollarValue>
        </div>
      </StTotalContainer>
      <StTable>
        <thead>
          <StTableRow>
            {DASHBORADTABLEHEADER.map((item) => (
              <StTableHeader key={item}>{item}</StTableHeader>
            ))}
          </StTableRow>
        </thead>
        <tbody>
          {data.bots.map((item) => (
            <StTableRow>
              <StTableCell>{item.bot_id}</StTableCell>
              <StTableCell>
                {item.total_investment} {TOKEN}
              </StTableCell>
              <StTableCell>
                {item.current_value} {TOKEN}
              </StTableCell>
              <StTableCell>
                <StPositiveColor>
                  + {item.daily_pnl} {TOKEN}
                </StPositiveColor>
              </StTableCell>
              <StTableCell>
                <StPositiveColor>
                  + {item.total_profit} {TOKEN}
                </StPositiveColor>
              </StTableCell>
              <StTableCell>
                <StAddBtn>Add</StAddBtn>
                <StRemoveBtn>Remove</StRemoveBtn>
              </StTableCell>
            </StTableRow>
          ))}
        </tbody>
      </StTable>
    </>
  );
};

const ISnotConnectWallet = () => {
  return (
    <StNotConnectContainer>
      <StBackbround src={onBoardingCube} />
      <IcStrokeLogo />
      <span>
        <StText1>QVE is not connected</StText1>
        <StText1>to your wallet</StText1>
        <div />
        <StText2>To see more information about this vault</StText2>
        <StText2>you need to connect your wallet</StText2>
      </span>
      <ConnectWallet />
    </StNotConnectContainer>
  );
};

const ISnotSelectBot = () => {
  const navigate = useNavigate();
  return (
    <StNotConnectContainer>
      <StBackbround src={onBoardingCube} />
      <IcStrokeLogo />
      <span>
        <StText1>You are not investing in the</StText1>
        <StText1>trading bot. Go invest now!</StText1>
        <div />
        <StText2>You have not deposited to QVE.</StText2>
        <StText2>
          If you want to earn profits, go ahead and make a deposit!
        </StText2>
      </span>
      <StConnectWallet
        onClick={() => {
          navigate('/tradeBots');
        }}
      >
        Trade Now
      </StConnectWallet>
    </StNotConnectContainer>
  );
};

const Dashboard = () => {
  const [isWalletConnect] = useState(localStorage.getItem('NEUTRONADDRESS'));

  const [data] = useState(MOCK_DASHBOARD);
  return (
    <StContainer>
      <SelectView view={VIEW.DASHBOARD} />
      {isWalletConnect ? (
        data.bots.length ? (
          <ShowDashboardData data={data} />
        ) : (
          <ISnotSelectBot />
        )
      ) : (
        <ISnotConnectWallet />
      )}
    </StContainer>
  );
};

export default Dashboard;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StTotalContainer = styled.div`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.white};

  & > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    & label {
      ${({ theme }) => theme.fonts.body_1};
    }
  }
`;

const StTotalTokenValue = styled.p`
  ${({ theme }) => theme.fonts.title_1};
`;

const StTotalDollarValue = styled.p`
  ${({ theme }) => theme.fonts.caption};
`;
const StTable = styled.table`
  margin-top: 0.2rem;
  border-collapse: collapse;
  width: 100%;
`;

const StPositiveColor = styled.span`
  color: ${({ theme }) => theme.colors.positive};
`;

const StTableRow = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.colors.not_important};
`;

const StTableHeader = styled.th`
  padding: 1.2rem 0 1.2rem 2rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_3m};
`;

const StTableCell = styled.td`
  padding: 3.7rem 0 3.7rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_2_auto};
`;

const StAddBtn = styled(STCOMBlueBtn)`
  padding: 1.2rem 2.5rem;
  ${({ theme }) => theme.fonts.body_3m};
  margin-right: 1rem;
`;

const StRemoveBtn = styled(STCOMGreyBtn)`
  padding: 1.3rem 1.6rem;
  ${({ theme }) => theme.fonts.body_3m};
`;

const StNotConnectContainer = styled(STCOMBoxWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55rem;
  gap: 3rem;
  background: var(
    --glass-effect,
    linear-gradient(
      144deg,
      rgba(255, 255, 255, 0.1) -9.46%,
      rgba(255, 255, 255, 0.25) 115.25%
    )
  );

  & > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
      height: 2rem;
    }
  }
`;

const StText1 = styled.p`
  ${({ theme }) => theme.fonts.title_0};
`;

const StText2 = styled.p`
  ${({ theme }) => theme.fonts.body_3};
  color: ${({ theme }) => theme.colors.sub_white};
`;

const StConnectWallet = styled(STCOMBlueBtn)`
  padding: 1.8rem 3.2rem;
`;

const StBackbround = styled.img`
  width: 90%;
  position: absolute;
  top: 25%;
  right: 20%;
  z-index: -1;
`;
