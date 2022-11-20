import {useField} from "formik";

const FormCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
        <div className='form__row'>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} className='mr-2'/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default FormCheckbox;