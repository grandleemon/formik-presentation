import React, {useEffect, useState} from 'react';

const SimpleReactForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        formErrors: {}
    })

    const handleChange = (e) => {
        const {name, value} = e

        validate(name, value)

        setFormData(prevState  => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

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
                        }
                    }))
                } else {
                    const newObj = omit(formData.formErrors, name)
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: newObj
                    }))
                }
                break;
            case 'lastName':
                if(value.length < 8) {
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: {
                            ...formData.formErrors,
                            [name]: 'Length is less than 8'
                        }
                    }))
                } else {
                    const newObj = omit(formData.formErrors, name)
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: newObj
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
                        }
                    }))
                }else{
                    const newObj = omit(formData.formErrors, name)
                    setFormData(prevState => ({
                        ...prevState,
                        formErrors: newObj
                    }))
                }
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`First name: ${formData.firstName}, last name: ${formData.lastName}, email: ${formData.email}`)
    }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="firstName" className='flex flex-col gap-y-2'>
                        First name
                        <input
                            type="text"
                            id='firstName'
                            name="firstName"
                            value={formData.firstName}
                            onChange={e => handleChange(e.target)}
                            placeholder='First name'
                            required
                        />
                    </label>
                    {formData.formErrors.firstName && <div className='text-red-500'>{formData.formErrors.firstName}</div>}
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="lastName" className='flex flex-col gap-y-2'>
                        Last name
                        <input
                            type="text"
                            id='lastName'
                            name="lastName"
                            value={formData.lastName}
                            onChange={e => handleChange(e.target)}
                            placeholder='Last name'
                            required
                        />
                    </label>
                    {formData.formErrors.lastName && <div className='text-red-500'>{formData.formErrors.lastName}</div>}
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="email" className='flex flex-col gap-y-2'>
                        Email address
                        <input
                            type="text"
                            id='email'
                            name="email"
                            value={formData.email}
                            onChange={e => handleChange(e.target)}
                            placeholder='Email'
                            required
                        />
                    </label>
                    {formData.formErrors.email && <div className='text-red-500'>{formData.formErrors.email}</div>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SimpleReactForm;