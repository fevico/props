import {useRef, forwardRef} from 'react'

// input component that uses ref
// the forward ref accepts the ref from parent component
const CustomInput = forwardRef(({label, placeholder, className}, ref) => {
    return (
        <div className="mb-4">
            <label className='block text-gray-700 font-medium mb-2' htmlFor={label}>{label}</label>
            <input ref={ref} type="text" placeholder={placeholder} className={`w-full px-4 py-2 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} />
        </div>
    )
})

CustomInput.displayName = "CustomInput";
const RefProps = () => {
    const inputRef = useRef(null);
    const secondInputRef = useRef(null);

    const focusInput = () => {
        inputRef.current?.focus()
    }

    const getInputValue = () => {
        if(inputRef.current){ 
            alert(`Input Value: ${inputRef.current.value}`);
        }
    }

    const clearInput = () => {
        if(inputRef.current){
            inputRef.current.value = "";  
            inputRef.current.focus();
        }
    }

    const secondInput = () => {
        secondInputRef.current?.focus()
    }

  return ( 
    <div>
        <section className='p-8 bg-white rounded-xl shadow-lg text-black'>
            <h2>Ref Props</h2>
            <p>Refs in React provide a way to access and interact with DOM elements or React components directly. They are commonly used for managing focus, text selection, or triggering imperative animations.</p>
            <div>
                <div>
                    <h3>Try it out</h3>
                    <CustomInput ref={inputRef} label="Input 1" placeholder="Enter text here"/>
                    <CustomInput ref={secondInputRef} label="Input 2" placeholder="Enter text here"/>
                    <div className="flex flex-wrap gap-3 mt-4">
                        <button onClick={focusInput} className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>Focus First Input</button>
                        <button onClick={secondInput} className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>Focus Second Input</button>
                        <button onClick={getInputValue} className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>Get Input Value</button>
                        <button onClick={clearInput} className='p-2 bg-red-500 text-white rounded-lg hover:bg-red-600'>Clear First Input</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default RefProps