// 登录表单
export interface LoginType {
  username: string;
  password: string;
  captcha: string;
}

// 验证码返回
export interface CaptchaType {
  captchaImg: string;
}

// 登录返回
export interface LoginRespType {
  accessExpire: number;
  accessToken: string;
  userInfo: {
    userName: string;
    nickName: string;
    bgColor: string;
    textColor: string;
  };
}
