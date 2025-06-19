import React, {useId} from 'react'

/**
* @author
* @function Select
**/

 function Select ({
    options = [],
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()

  return(
    <div className='w-full'>
     {label && <label className=''
      htmlFor={id} > </label>}

    <select  
    {...props}
    id={id}
    ref={ref}
    className={`px-3 py-2 rounded-lg bg-white
         text-black outline-none
         focus:bg-gray-50 duration-200 border
          border-gray-200 w-full 
          ${className}`}
    >
        {/* // options?.  is an optional loop which used when you dont
        // want to crash when there is no value in the array */}
        {options?.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>
    </div>
    
   )
}
export default React.forwardRef(Select);
