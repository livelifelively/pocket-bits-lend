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
