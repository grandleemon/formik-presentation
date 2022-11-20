import { useState } from 'react';

const SimpleReactForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        formErrors: {},
        firstNameValid: false,
        lastNameValid: false,
        emailValid: false
    })

    const formValid = formData.firstNameValid && formData.lastNameValid && formData.emailValid

    const handleChange = (e) => {
        const { name, value } = e

        validate(name, value)

        setFormData(prevState  => ({
            ...prevState,
            [name]: value
        }))
    }

    const omit = (errors, ...props) => {
        const result = {...errors}

        props.forEach(prop => {
            delete result[prop]
        })

        return result
    }

    const validate = (name, value) => {
        switch (name) {
            case 'firstName':
                if(value.length < 8) {
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: {
                            ...formData.formErrors,
                            [name]: 'Length is less than 8'
                        },
                        firstNameValid: false
                    }))
                } else {
                    const newObj = omit(formData.formErrors, name)
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: newObj,
                        firstNameValid: true
                    }))
                }
                break;
            case 'lastName':
                if(value.length < 8) {
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: {
                            ...formData.formErrors,
                            [name]: 'Length is less than 8',
                        },
                        lastNameValid: false
                    }))
                } else {
                    const newObj = omit(formData.formErrors, name)
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: newObj,
                        lastNameValid: true
                    }))
                }
                break;
            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: {
                            ...formData.formErrors,
                            [name]: 'Invalid email'
                        },
                        emailValid: false
                    }))
                }else{
                    const newObj = omit(formData.formErrors, name)
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: newObj,
                        emailValid: true
                    }))
                }
                break;
            default:
                setFormData(prevState => (
                    {...prevState,
                    formValid: formData.lastNameValid && formData.firstNameValid && formData.emailValid})
                )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`First name: ${formData.firstName}, last name: ${formData.lastName}, email: ${formData.email}`)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            formErrors: {},
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false
        })
    }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit} className='form'>
                <div className='form__row'>
                    <label htmlFor="firstName" className='flex flex-col gap-y-2'>
                        First name
                        <input
                            type="text"
                            id='firstName'
                            name="firstName"
                            value={formData.firstName}
                            onBlur={(e) => handleChange(e.target)}
                            onChange={e => handleChange(e.target)}
                            placeholder='First name'
                            required
                        />
                    </label>
                    {formData.formErrors.firstName && <div className='error'>{formData.formErrors.firstName}</div>}
                </div>
                <div className='form__row'>
                    <label htmlFor="lastName" className='flex flex-col gap-y-2'>
                        Last name
                        <input
                            type="text"
                            id='lastName'
                            name="lastName"
                            value={formData.lastName}
                            onBlur={(e) => handleChange(e.target)}
                            onChange={e => handleChange(e.target)}
                            placeholder='Last name'
                            required
                        />
                    </label>
                    {formData.formErrors.lastName && <div className='error'>{formData.formErrors.lastName}</div>}
                </div>
                <div className='form__row'>
                    <label htmlFor="email" className='flex flex-col gap-y-2'>
                        Email address
                        <input
                            type="text"
                            id='email'
                            name="email"
                            value={formData.email}
                            onBlur={(e) => handleChange(e.target)}
                            onChange={e => handleChange(e.target)}
                            placeholder='Email'
                            required
                        />
                    </label>
                    {formData.formErrors.email && <div className='error'>{formData.formErrors.email}</div>}
                </div>
                <button type='submit' disabled={!formValid}>Submit</button>
            </form>
        </div>
    );
};

export default SimpleReactForm;