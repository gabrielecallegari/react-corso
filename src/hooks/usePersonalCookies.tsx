import { useCookies } from "react-cookie";

export const usePersonalCookies = () => {
  const cookieName = "prova";
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);

  const setPersonalCookie = (value: any, ) => {
    const date = new Date('2025-12-17')
    setCookie(cookieName , value, {
        expires: date
    });
  };

  const removePersonalCookie = () => {
    removeCookie(cookieName);
  };

  return {
    setPersonalCookie,
    removePersonalCookie,
  };
};
