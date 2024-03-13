import Inputs from "../Inputs/Inputs.jsx"
import { Formstyle } from "./Form.js";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const form = ({list, settList}) =>{
    const [formData, setFormData] = useState({
        description: "",
        value: "",
        type: "",
    })
    const submitForm = (e) => {
        e.preventDefault();
        const newTransaction = {id: uuidv4(), ...formData}
        settList([...list,newTransaction]);
        console.log(list);
    
        setFormData({
            description: "",
            value: "",
            type: "",
        });
      }
    return(
        <Formstyle onSubmit={submitForm}>
            <Inputs formData = {formData} setFormData = {setFormData}/>
        </Formstyle>
    )
}

export default form;