import {useField} from "formik";

const FormInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className='form__row'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={`text-input ${meta.touched && meta.error ? 'input-error' : ''}`} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default FormInput;