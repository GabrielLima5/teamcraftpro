import './List.css'

const List = (props) => {
  return (
    <label className="list text-field">
        <span>{props.label}</span>
        <select value={props.value} onChange={e => props.setValue(e.target.value)} required={props.required}>
            <option value=""></option>
            {props.items && props.items.map(item => (
                <option key={item}>{item}</option>
            ))}
        </select>
    </label>
  )
}

export default List