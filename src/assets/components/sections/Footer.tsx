import { FunctionComponent } from "react";
import logo from "./../../images/logo.svg";
import payments from "./../../images/icons_payment.png";
import { Button } from "../ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div className="container pb-16 flex justify-between items-start flex-col gap-y-16 md:flex-row sm:text-left text-center">
        <div className="md:w-1/3 space-y-6">
          <img src={logo} alt="logo" className="w-[180px] mx-auto sm:mx-0" />
          <p className="leading-loose text-black/75 opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex w-3/5 items-center justify-between mx-auto sm:mx-0">
            <svg
              width="11"
              height="21"
              viewBox="0 0 11 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1484 11.75H7.21875V20.5H3.3125V11.75H0.109375V8.15625H3.3125V5.38281C3.3125 2.25781 5.1875 0.5 8.03906 0.5C9.40625 0.5 10.8516 0.773438 10.8516 0.773438V3.85938H9.25C7.6875 3.85938 7.21875 4.79688 7.21875 5.8125V8.15625H10.6953L10.1484 11.75Z"
                className="fill-black transition-colors hover:fill-primary"
              />
            </svg>
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4297 4.4375C18.4297 4.63281 18.4297 4.78906 18.4297 4.98438C18.4297 10.4141 14.3281 16.625 6.78906 16.625C4.44531 16.625 2.29688 15.9609 0.5 14.7891C0.8125 14.8281 1.125 14.8672 1.47656 14.8672C3.39062 14.8672 5.14844 14.2031 6.55469 13.1094C4.75781 13.0703 3.23438 11.8984 2.72656 10.2578C3 10.2969 3.23438 10.3359 3.50781 10.3359C3.85938 10.3359 4.25 10.2578 4.5625 10.1797C2.6875 9.78906 1.28125 8.14844 1.28125 6.15625V6.11719C1.82812 6.42969 2.49219 6.58594 3.15625 6.625C2.02344 5.88281 1.32031 4.63281 1.32031 3.22656C1.32031 2.44531 1.51562 1.74219 1.86719 1.15625C3.89844 3.61719 6.94531 5.25781 10.3438 5.45312C10.2656 5.14062 10.2266 4.82812 10.2266 4.51562C10.2266 2.25 12.0625 0.414062 14.3281 0.414062C15.5 0.414062 16.5547 0.882812 17.3359 1.70312C18.2344 1.50781 19.1328 1.15625 19.9141 0.6875C19.6016 1.66406 18.9766 2.44531 18.1172 2.95312C18.9375 2.875 19.7578 2.64062 20.4609 2.32812C19.9141 3.14844 19.2109 3.85156 18.4297 4.4375Z"
                className="fill-black transition-colors hover:fill-primary"
              />
            </svg>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.65625 18H1.02344V6.32031H4.65625V18ZM2.82031 4.75781C1.6875 4.75781 0.75 3.78125 0.75 2.60938C0.75 1.00781 2.46875 -0.0078125 3.875 0.8125C4.53906 1.16406 4.92969 1.86719 4.92969 2.60938C4.92969 3.78125 3.99219 4.75781 2.82031 4.75781ZM18.2109 18H14.6172V12.3359C14.6172 10.9688 14.5781 9.25 12.7031 9.25C10.8281 9.25 10.5547 10.6953 10.5547 12.2188V18H6.92188V6.32031H10.3984V7.92188H10.4375C10.9453 7.02344 12.1172 6.04688 13.875 6.04688C17.5469 6.04688 18.25 8.46875 18.25 11.5938V18H18.2109Z"
                className="fill-black transition-colors hover:fill-primary"
              />
            </svg>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 5.00781C11.9609 5.00781 13.9922 7.03906 13.9922 9.5C13.9922 12 11.9609 13.9922 9.5 13.9922C7 13.9922 5.00781 12 5.00781 9.5C5.00781 7.03906 7 5.00781 9.5 5.00781ZM9.5 12.4297C11.1016 12.4297 12.3906 11.1406 12.3906 9.5C12.3906 7.89844 11.1016 6.60938 9.5 6.60938C7.85938 6.60938 6.57031 7.89844 6.57031 9.5C6.57031 11.1406 7.89844 12.4297 9.5 12.4297ZM15.2031 4.85156C15.2031 4.26562 14.7344 3.79688 14.1484 3.79688C13.5625 3.79688 13.0938 4.26562 13.0938 4.85156C13.0938 5.4375 13.5625 5.90625 14.1484 5.90625C14.7344 5.90625 15.2031 5.4375 15.2031 4.85156ZM18.1719 5.90625C18.25 7.35156 18.25 11.6875 18.1719 13.1328C18.0938 14.5391 17.7812 15.75 16.7656 16.8047C15.75 17.8203 14.5 18.1328 13.0938 18.2109C11.6484 18.2891 7.3125 18.2891 5.86719 18.2109C4.46094 18.1328 3.25 17.8203 2.19531 16.8047C1.17969 15.75 0.867188 14.5391 0.789062 13.1328C0.710938 11.6875 0.710938 7.35156 0.789062 5.90625C0.867188 4.5 1.17969 3.25 2.19531 2.23438C3.25 1.21875 4.46094 0.90625 5.86719 0.828125C7.3125 0.75 11.6484 0.75 13.0938 0.828125C14.5 0.90625 15.75 1.21875 16.7656 2.23438C17.7812 3.25 18.0938 4.5 18.1719 5.90625ZM16.2969 14.6562C16.7656 13.5234 16.6484 10.7891 16.6484 9.5C16.6484 8.25 16.7656 5.51562 16.2969 4.34375C15.9844 3.60156 15.3984 2.97656 14.6562 2.70312C13.4844 2.23438 10.75 2.35156 9.5 2.35156C8.21094 2.35156 5.47656 2.23438 4.34375 2.70312C3.5625 3.01562 2.97656 3.60156 2.66406 4.34375C2.19531 5.51562 2.3125 8.25 2.3125 9.5C2.3125 10.7891 2.19531 13.5234 2.66406 14.6562C2.97656 15.4375 3.5625 16.0234 4.34375 16.3359C5.47656 16.8047 8.21094 16.6875 9.5 16.6875C10.75 16.6875 13.4844 16.8047 14.6562 16.3359C15.3984 16.0234 16.0234 15.4375 16.2969 14.6562Z"
                className="fill-black transition-colors hover:fill-primary"
              />
            </svg>
          </div>
        </div>
        <div className="w-full md:w-3/5 flex justify-between opensans flex-col gap-y-6 sm:flex-row ">
          <div className="space-y-4">
            <h3 className="text-6xl">CATALOG</h3>
            <div className="text-[14px]">Necklaces</div>
            <div className="text-[14px]">Hoodies</div>
            <div className="text-[14px]">Jewelry Box</div>
            <div className="text-[14px]">T-Shirt</div>
            <div className="text-[14px]">Jacket</div>
          </div>
          <div className="space-y-4">
            <h3 className="text-6xl">ABOUT US</h3>
            <div className="text-[14px]">Our Producers</div>
            <div className="text-[14px]">Sitemap</div>
            <div className="text-[14px]">FAQ</div>
            <div className="text-[14px]">About Us</div>
            <div className="text-[14px]">Terms & Conditions</div>
          </div>
          <div className="space-y-4">
            <h3 className="text-6xl">CUSTOMER SERVICES</h3>
            <div className="text-[14px]">Contact Us</div>
            <div className="text-[14px]">Track Your Order</div>
            <div className="text-[14px]">Product Care & Repair</div>
            <div className="text-[14px]">Book an Appointment</div>
            <div className="text-[14px]">Shipping & Returns</div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-black text-black-foreground">
        <div className="container flex justify-center md:justify-between flex-col gap-y-3 md:flex-row">
          <div className="md:text-left text-center">© 2022 Coral , Inc.</div>
          <img src={payments} alt="payments" className="" />
          <Button variant={"simple"}>
            <span>Scroll to top</span>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9766 6.50391C10.8125 6.66797 10.5938 6.75 10.375 6.75C10.1289 6.75 9.91016 6.66797 9.74609 6.50391L6.875 3.63281V12C6.875 12.4922 6.46484 12.875 6 12.875C5.5625 12.875 5.125 12.4922 5.125 12V3.63281L2.22656 6.50391C1.89844 6.85938 1.32422 6.85938 0.996094 6.50391C0.640625 6.17578 0.640625 5.60156 0.996094 5.27344L5.37109 0.898438C5.69922 0.542969 6.27344 0.542969 6.60156 0.898438L10.9766 5.27344C11.332 5.60156 11.332 6.17578 10.9766 6.50391Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    </footer>
  );
};
