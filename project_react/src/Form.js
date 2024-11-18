import { Button } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import "./Form.css";
import axios from "axios";
import { useState } from "react";

const { InputGroup, FormControl, FormCheck } = require("react-bootstrap");

function Form() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState();
    const [gender, setGender] = useState("");

    function handleSubmit() {
        console.log(name, surname, age, gender);
        axios.post("http://localhost:2000/task02/data", {
            name: name,
            surname: surname,
            age: age,
            gender: gender,
        })
        .then((response) => {console.log(response)})
        .catch((error) => {console.error(error)});
    }

    return (
        <InputGroup className="form">
            <InputGroupText id="name"> Imię
                <FormControl type="text" onChange={(e) => {setName(e.target.value)}}></FormControl>
            </InputGroupText>
            <InputGroupText id="surname"> Nazwisko
                <FormControl type="text" onChange={(e) => {setSurname(e.target.value)}}></FormControl>
            </InputGroupText>
            <InputGroupText id="age"> Wiek
                <FormControl type="number" onChange={(e) => {setAge(e.target.value)}}></FormControl>
            </InputGroupText>
            <InputGroupText>
                <FormCheck type="radio" label="Mężczyzna" name="gender" value="male" onChange={(e) => {setGender(e.target.value)}}></FormCheck>
                <FormCheck type="radio" label="Kobieta" name="gender" value="female" onChange={(e) => {setGender(e.target.value)}}></FormCheck>
                <FormCheck type="radio" label="Inne" name="gender" value="other" onChange={(e) => {setGender(e.target.value)}}></FormCheck>
            </InputGroupText>
            <Button onClick={handleSubmit}>Submirt</Button>
        </InputGroup>
    )
}

export default Form;