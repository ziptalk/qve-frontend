export interface IDashboard {
  total_balance: number;
  total_profit: number;
  bots: IBOTS[];
}

interface IBOTS {
  bot_id: string;
  total_investment: number;
  current_value: number;
  daily_pnl: number;
  total_profit: number;
}

export interface ITRADEBOTS {
  bot_id: string;
  name: string;
  subscriber: number;
  total_profits: number;
  apy: number;
  runtime: number;
  tvl: number;
  operated_in: string;
}
