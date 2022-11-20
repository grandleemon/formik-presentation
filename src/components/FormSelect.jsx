import {useField} from "formik";

const FormSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className='form__row'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} className={` ${meta.touched && meta.error ? 'input-error' : ''}`}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default FormSelect;