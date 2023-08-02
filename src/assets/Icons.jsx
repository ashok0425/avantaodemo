export const RightChevron = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      height={size}
      width={size}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke={color}
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  )
}
