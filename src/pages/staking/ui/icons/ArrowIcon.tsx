interface ArrowProps {
  fill?: string;
  size?: number;
}

export const ArrowMenuIcon = ({ fill, size }: ArrowProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ?? 14} height={size ?? 14} fill="none" viewBox="0 0 13 22">
      <path
        fill={fill ?? "#fff"}
        d="M.683 18.475a1.713 1.713 0 102.633 2.194l8.571-8.571c.069-.081.102-.177.153-.266.041-.07.09-.132.12-.21a1.7 1.7 0 00.125-.622 1.7 1.7 0 00-.125-.622c-.03-.077-.079-.139-.12-.209-.051-.09-.084-.185-.153-.266L3.316 1.332A1.713 1.713 0 10.683 3.526l6.228 5.76L8.625 11 6.907 12.72.683 18.475z"
      ></path>
    </svg>
  );
};
