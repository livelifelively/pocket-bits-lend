type User = null | { email: string; token: string; passcode: string; userAuthenticated: boolean };

type RequestResponse = {
  status: 'SUCCESS' | 'FAILED';
  data: any;
  request?: any;
  error: any;
};

type SignUpRequest = {
  email: string;
  password: string;
  referralCode: string;
};

type SignInOTPRequest = {
  login: string;
  password: string;
};

type SignInRequest = {
  login: string;
  password: string;
  verificationCode: string;
};

type VerifyEmailRequest = {
  otp: string;
  email: string;
};

type TwoFactorAuthenticationRequest = {
  verificationCode: string;
  email: string;
};

type ResendEmailOTPRequest = {
  email: string;
  type: 'login';
};

type WalletBalanceForCoinRequest = {
  coinId: 'ETH' | 'BTC' | 'USDT';
};

type WalletsBalanceRequest = Record<string, never>;

type WalletBalanceResponse = {
  addressPresent: boolean;
  availableBalance: string;
  coinId: string;
  vaultBalance: string;
};

type CoinTickerResponse = {
  at: number;
  buy: string;
  high: string;
  low: string;
  sell: string;
  symbol: string;
};

type CoinId = 'ETH' | 'BTC' | 'USDT';

type UserCurrency = {
  name: string;
  shortName: 'INR' | 'USD';
  symbol: string;
};

type Holding = {
  value: number;
  valueInUserCurrency: number;
};

type WalletDetails = {
  id: CoinId;
  currency: UserCurrency;
  holding: {
    total: Holding;
    available: Holding;
    vault: Holding;
  };
  crypto: {
    valueInUserCurrency: number;
    shortName: CoinId;
    changeInPercent: {
      changeDirection: '-' | '+';
      changeValue: number;
    };
  };
};
