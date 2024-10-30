function Row(props) {
    return(
        <tr>
            <td>{props.i}</td>
            <td>{props.key1}</td>
            <input type="button" onClick={props.onButtonClick}></input>
        </tr>
    )
}

export default Row;