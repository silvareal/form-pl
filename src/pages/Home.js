import React from "react";
import TemplateList from "../components/templateList/TemplateList";
import Navbar from "../navbar/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-3">
      <Navbar />
      {/* Get started alert */}
      <div
        class="flex items-center justify-center alert-bg  alert-text text-sm px-4 py-5 mt-5  mb-5"
        role="alert"
      >
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 23.4375C15.4008 23.4375 18.1828 22.2852 20.234 20.234C22.2852 18.1828 23.4375 15.4008 23.4375 12.5C23.4375 9.59919 22.2852 6.8172 20.234 4.76602C18.1828 2.71484 15.4008 1.5625 12.5 1.5625C9.59919 1.5625 6.8172 2.71484 4.76602 4.76602C2.71484 6.8172 1.5625 9.59919 1.5625 12.5C1.5625 15.4008 2.71484 18.1828 4.76602 20.234C6.8172 22.2852 9.59919 23.4375 12.5 23.4375ZM12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25Z"
            fill="#FC830A"
          />
          <path
            d="M13.9531 10.2938L10.3749 10.7422L10.2468 11.336L10.9499 11.4656C11.4093 11.575 11.4999 11.7406 11.3999 12.1985L10.2468 17.6172C9.94368 19.0188 10.4109 19.6781 11.5093 19.6781C12.3609 19.6781 13.3499 19.2844 13.7984 18.7438L13.9359 18.0938C13.6234 18.3688 13.1671 18.4781 12.864 18.4781C12.4343 18.4781 12.278 18.1766 12.389 17.6453L13.9531 10.2938Z"
            fill="#FC830A"
          />
          <path
            d="M12.5 8.59375C13.3629 8.59375 14.0625 7.8942 14.0625 7.03125C14.0625 6.16831 13.3629 5.46875 12.5 5.46875C11.6371 5.46875 10.9375 6.16831 10.9375 7.03125C10.9375 7.8942 11.6371 8.59375 12.5 8.59375Z"
            fill="#FC830A"
          />
        </svg>

        <p className="ml-3">
          Tada! Get started with a free template. Can’t find what you are
          looking for? Search from the 1000+ available templates
        </p>
      </div>
      {/* End Get started alert */}

      <div className="flex justify-between py-3">
        <p className="text-help-main">All Templates</p>
        <p className="text-help-sub">2000 templates</p>
      </div>
      <TemplateList />
    </div>
  );
}
