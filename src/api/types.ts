export type SignUpRequest = {
  email: string;
  password: string;
  referralCode: string;
};

export type SignInOTPRequest = {
  login: string;
  password: string;
};

export type SignInRequest = {
  login: string;
  password: string;
  verificationCode: string;
};

export type VerifyEmailRequest = {
  otp: string;
  email: string;
};

export type TwoFactorAuthenticationRequest = {
  verificationCode: string;
  email: string;
};

export type ResendEmailOTPRequest = {
  email: string;
  type: 'login';
};
