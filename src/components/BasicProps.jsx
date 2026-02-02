import React,  {useState} from 'react'

function Button({text, color, size, onClick, disabled}) {
    return (
        <button onClick={onClick} disabled={disabled} 
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 
        ${size === "small" ? "text-sm px-3 py-1" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${color === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
        ${color === "secondary" ? "bg-gray-500 text-white hover:bg-gray-600" : ""}
        ${color === "danger" ? "bg-red-500 text-white hover:bg-red-600" : ""}
        ${color === "success" ? "bg-green-500 text-white hover:bg-green-600" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}>{text}</button>
    )
}
const BasicProps = () => {
    const [clickCount, setClickCount] = useState(0);
  return (
    <section className='p-8 bg-white rounded-xl shadow-2xl text-black'>
        <h2 className='text-2xl font-bold mb-4'>Basic Props</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe nobis consectetur distinctio enim atque possimus sit dolores quod placeat!</p>
        
        <div className="space-y-4">
            <h3>Different colors {clickCount}</h3>
            <div className="flex flex-wrap gap-3">
                <Button text="Primary" color="primary" onClick={() => setClickCount(prev => prev + 1)}/>
                <Button text="Secondary" color="secondary" onClick={() => setClickCount(prev => prev + 1)}/>
                <Button text="Danger" color="danger" onClick={() => setClickCount(prev => prev + 1)}/>
                <Button text="Success" color="success" onClick={() => setClickCount(prev => prev + 1)}/>
            </div>
        </div>
        {/* diffrent sizes */}
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Different sizes {clickCount}</h3>
            <div className="flex flex-wrap gap-3">
                <Button text="Small" size="small" color="primary" onClick={() => setClickCount(prev => prev + 1)}/>
                <Button text="Medium" size="medium" color="secondary" onClick={() => setClickCount(prev => prev + 1)}/>
                <Button text="Large Button" disabled={true} size="large" color="danger" onClick={() => setClickCount(prev => prev + 1)}/>
                <Button text="Success" color="success" onClick={() => setClickCount(prev => prev + 1)}/>
            </div>
        </div>
    </section>
  )
}

export default BasicProps