import React from 'react';
import Link from 'next/link';

export const CustomLink = ({ label, route }) => {
  const arrow = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10H0ZM7.38 13.5038C7.32235 13.5634 7.25338 13.6111 7.17713 13.6438C7.10087 13.6766 7.01886 13.6938 6.93588 13.6945C6.85289 13.6953 6.77059 13.6794 6.69378 13.648C6.61697 13.6166 6.54719 13.5702 6.4885 13.5115C6.42982 13.4528 6.38341 13.383 6.35199 13.3062C6.32056 13.2294 6.30475 13.1471 6.30547 13.0641C6.30619 12.9811 6.32343 12.8991 6.35619 12.8229C6.38894 12.7466 6.43656 12.6777 6.49625 12.62L11.6163 7.5H8.15625C7.99049 7.5 7.83152 7.43415 7.71431 7.31694C7.5971 7.19973 7.53125 7.04076 7.53125 6.875C7.53125 6.70924 7.5971 6.55027 7.71431 6.43306C7.83152 6.31585 7.99049 6.25 8.15625 6.25H13.125C13.2908 6.25 13.4497 6.31585 13.5669 6.43306C13.6842 6.55027 13.75 6.70924 13.75 6.875V11.8438C13.75 12.0095 13.6842 12.1685 13.5669 12.2857C13.4497 12.4029 13.2908 12.4688 13.125 12.4688C12.9592 12.4688 12.8003 12.4029 12.6831 12.2857C12.5658 12.1685 12.5 12.0095 12.5 11.8438V8.38375L7.38 13.5038Z" />
    </svg>
  );

  return (
    <Link href={route}>
      <a>
        <div className="d-flex custom-link">
          <span className="btn-link custom-link__text">{label}</span>
          {arrow}
        </div>
      </a>
    </Link>
  );
};
