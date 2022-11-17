import {useField} from "formik";

const FormSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className='form__row'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} className='text-black h-12 focus:outline-none'/>
            {meta.touched && meta.error ? (
                <div className="text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default FormSelect;