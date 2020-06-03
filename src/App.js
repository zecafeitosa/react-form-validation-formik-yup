import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
	const FormSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, 'Too Short!')
			.max(30, 'Too Long!')
			.required('Required'),
		email: Yup.string()
			.email('Invalid email')
			.required('Required')
	});

	const { handleSubmit, handleChange, values, errors, touched } = useFormik({
		initialValues: {
			name: '',
			email: ''
		},
		validationSchema: FormSchema,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
			</header>

			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>

			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					name="name"
					onChange={handleChange}
					values={values.name}
				/>
				{errors.name && touched.name && (
					<span className="inputError">{errors.name}</span>
				)}

				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					onChange={handleChange}
					values={values.email}
				/>
				{errors.email && touched.email && (
					<span className="inputError">{errors.email}</span>
				)}
				<button	type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
