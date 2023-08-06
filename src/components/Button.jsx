import React from 'react'

const Button = React.forwardRef(
  ({ children, showArrow = true, ...props }, ref) => {
    return (
      <button type='button' ref={ref} className='btn' {...props}>
        {children}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='icon'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
    )
  }
)

export default Button
