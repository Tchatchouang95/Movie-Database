import React from 'react'

function Footer() {
  return (
    <div className='max-w-250 mx-auto bg-[#DA9F58]'>
        <div className='flex-row md:flex items-center justify-between p-10 mt-4'>
            <div className='flex w-20'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M37,3H13C7.486,3,3,7.487,3,13.001v23.997C3,42.513,7.486,47,13,47h24c5.514,0,10-4.487,10-10.001V13 C47,7.486,42.514,3,37,3z M36.238,20.48c0.01,0.237,0.016,0.477,0.016,0.719C36.254,28.537,30.681,37,20.491,37 c-3.128,0-6.041-0.919-8.491-2.496c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.886,6.879-2.376 c-2.424-0.044-4.468-1.653-5.175-3.857c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.196 c-2.532-0.512-4.441-2.754-4.441-5.446c0-0.024,0-0.047,0-0.07c0.747,0.416,1.6,0.667,2.509,0.696 c-1.488-0.998-2.464-2.696-2.464-4.623c0-1.018,0.272-1.971,0.749-2.793c2.733,3.36,6.815,5.571,11.418,5.803 c-0.095-0.407-0.145-0.83-0.145-1.265c0-3.067,2.48-5.554,5.54-5.554c1.593,0,3.032,0.674,4.042,1.754 c1.261-0.249,2.448-0.711,3.518-1.347c-0.413,1.295-1.292,2.384-2.437,3.072c1.122-0.136,2.188-0.433,3.183-0.875 C38.258,18.718,37.319,19.697,36.238,20.48z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
            </div>
            <div>
                <p className='p-2 font-semibold'>Home</p>
                <p className='p-2 font-semibold'>Login</p>
                <p className='p-2 font-semibold'>Terms & Conditions</p>
            </div>
            <div>
                <p className='p-2 font-semibold'>Private Policy</p>
                <p className='p-2 font-semibold'>Security and bugs</p>
                <p className='p-2 font-semibold'>Contact Us</p>
            </div>
        </div>
        <p className='text-center text-sm font-light py-2'>&copy; 2025 Tchatchouang Cedrick, All rights reserved.</p>
    </div>
  )
}

export default Footer