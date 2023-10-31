import React, { useState } from 'react';

const Form = () => {

const [nombre, setNombre] = useState('')
const [email, setEmail] = useState('')

const submitForm = (e) => {
    e.preventDefault()
   
    console.log(nombre)
    console.log(email)
}

const onInput = (e) => {

}

	return (
		<form onSubmit={submitForm}>
			<input type='text' name='myName' onChange={(e) => setNombre(e.target.value)}></input>
			<input type='email' name='myEmail' onChange={(e) => setEmail(e.target.value)}></input>

            <button type='submit'>Submit</button>
		</form>
	);
};

export default Form;
