import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormCheckbox from "../components/FormCheckbox";

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
    jobType: Yup.string()
        .oneOf(
            ['designer', 'development', 'product', 'other'],
            'Invalid Job Type'
        )
        .required('Required'),
})

const FormikYupAdvancedExample = () => {
    return (
        <div className='wrapper'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    jobType: '', // added for our select
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className='form'>
                    <FormInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                    />

                    <FormInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                    />

                    <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />

                    <FormSelect label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </FormSelect>

                    <FormCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </FormCheckbox>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default FormikYupAdvancedExample;