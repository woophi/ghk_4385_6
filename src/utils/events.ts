declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: 'event', v: string, data?: Record<string, string>) => void;
  }
}

type Payload = {
  id: number;
  add: 1 | 0;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbxs5IHfX20s0ZwqIhBcgHtBrOJ5YFEy_FV-oVsP-X24Ssn-9mcPpi1_KUcWJuIktowU/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, var: 'var6' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
