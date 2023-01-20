import { createContext } from "react";

export interface GrecaptchaState {
  grecaptcha: any;
  grecaptchaKeyId?: string;
  token?: string;
  setToken: (token: string) => any;
}

export const GrecaptchaContext = createContext<GrecaptchaState>({ grecaptcha: {}, setToken: () => ({}) });
