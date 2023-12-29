import { ClassValue } from "clsx";

export default function LawIcon({ className }: { className?: ClassValue }) {
  return (
    <svg
      className={className?.toString()}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <g clipPath="url(#clip0_404_184)">
        <path
          fill="#fff"
          d="M24.284 34.103h-2.653V9.79h11.181l-4.736 7.516a.816.816 0 001.38.87l4.108-6.518 4.107 6.517a.816.816 0 001.38-.87L34.315 9.79h.06a1.264 1.264 0 000-2.528h-9.3a4.138 4.138 0 00-2.208-1.617 2.878 2.878 0 00-5.734 0 4.138 4.138 0 00-2.207 1.617h-9.3a1.264 1.264 0 100 2.528h.059L.949 17.305a.816.816 0 001.38.87l4.107-6.518 4.108 6.517a.816.816 0 001.38-.87L7.188 9.79h11.18v24.314h-2.652a2.875 2.875 0 00-2.875 2.875h14.318a2.875 2.875 0 00-2.875-2.875z"
        ></path>
        <path
          stroke="#fff"
          strokeWidth="1.2"
          d="M6.436 25.694a5.844 5.844 0 01-5.834-5.671H12.27a5.844 5.844 0 01-5.834 5.67zM33.564 25.694a5.844 5.844 0 01-5.834-5.671h11.668a5.844 5.844 0 01-5.834 5.67z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_404_184">
          <path fill="#fff" d="M0 0H40V40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
