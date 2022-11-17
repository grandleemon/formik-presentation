import React from 'react';
import {useFormik} from "formik";

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 8) {
        errors.firstName = 'Must be 8 characters or more';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 8) {
        errors.lastName = 'Must be 8 characters or more';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const FormikSimpleExample = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='wrapper'>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div className='form__row'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {/*{formik.errors.firstName ? <div className='text-red-500'>{formik.errors.firstName}</div> : null}*/}
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='text-red-500'>{formik.errors.firstName}</div>
                    ) : null}
                </div>

                <div className='form__row'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {/*{formik.errors.lastName ? <div className='text-red-500'>{formik.errors.lastName}</div> : null}*/}
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='text-red-500'>{formik.errors.lastName}</div>
                    ) : null}
                </div>

                <div className='form__row'>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {/*{formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}*/}
                    {formik.touched.email && formik.errors.email ? (
                        <div className='text-red-500'>{formik.errors.email}</div>
                    ) : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormikSimpleExample;