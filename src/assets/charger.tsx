import { ClassValue } from "clsx";

export default function ChargerIcon({ className }: { className?: ClassValue }) {
  return (
    <svg
      className={className?.toString()}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="30"
      fill="none"
      viewBox="0 0 36 30"
    >
      <path
        fill="#fff"
        d="M12.821 21.892l-2.142-1.284 2.614-4.358h-6.25l4.886-8.142 2.142 1.285-2.614 4.357h6.25l-4.886 8.142z"
      ></path>
      <path
        fill="#fff"
        d="M35.5 3.75h-1.25V0h-2.5v3.75H30.5v7.5h1.25v14.375a1.875 1.875 0 11-3.75 0V15a1.25 1.25 0 00-1.25-1.25h-5V1.25A1.25 1.25 0 0020.5 0H4.25A1.25 1.25 0 003 1.25V27.5H1.75a1.25 1.25 0 100 2.5H23a1.25 1.25 0 100-2.5h-1.25V16.25h3.75v9.375a4.375 4.375 0 108.75 0V11.25h1.25v-7.5zM19.25 27.5H5.5v-25h13.75v25z"
      ></path>
    </svg>
  );
}
