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
