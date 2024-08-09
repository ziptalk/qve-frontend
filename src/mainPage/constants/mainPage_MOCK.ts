import { IDashboard } from '../types/dashboardType';

export const MOCK_DASHBOARD: IDashboard = {
  total_balance: 10000,
  total_profit: 2000,
  bots: [
    {
      bot_id: 'Cyclic Arb bot',
      total_investment: 5000,
      current_value: 5500,
      daily_pnl: 100,
      total_profit: 500,
    },
  ],
};
