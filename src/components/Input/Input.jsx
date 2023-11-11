import './Input.css'

export default function Input({name, placeholder, required, value, setValue}){
    return (
        <label className="text-field">
            <span>{name}</span>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" required={required} placeholder={placeholder} />
        </label>
    )
}