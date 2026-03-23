import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

export const sendSubscription = (email) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { user_email: email },
    PUBLIC_KEY
  );
};