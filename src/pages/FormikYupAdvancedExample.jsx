import React from 'react';
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    lastName: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    color: Yup.string()
        .oneOf(
            ['red', 'green', 'blue'],
            'Invalid color'
        )
        .required('Required')
})

const FormikYupAdvancedExample = () => (
    <div className='wrapper'>
        <Formik
            initialValues={{firstName: '', lastName: '', email: '', color: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm()
                }, 400);
            }}
        >
            {({isSubmitting, values}) => (
                <Form className='form'>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" id="firstName" placeholder='First name'/>
                    <ErrorMessage component='div' name="firstName" className='error'/>

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" placeholder='Last name' id='lastName'/>
                    <ErrorMessage component='div' name="lastName" className='error'/>

                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" placeholder='Email' id='email'/>
                    <ErrorMessage component='div' name="email" className='error'/>

                    <Field name="color" as="select" className="text-black">
                        <option value="" className='text-black'>Select a color</option>
                        <option value="red" className='text-black'>Red</option>
                        <option value="green" className='text-black'>Green</option>
                        <option value="blue" className='text-black'>Blue</option>
                    </Field>
                    <ErrorMessage component='div' name="color" className='error'/>
                    
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default FormikYupAdvancedExample;