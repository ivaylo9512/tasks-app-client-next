import React, {useState, useRef } from 'react';
import useEffectInitial from './useEffectInitital';

type Hook = (params : {name: string, placeholder?: string, validationRules?: [], initialValue?: string, equalValue?: string, equalName?: string}) => JSX.Element

const useInput: Hook = ({name, placeholder, validationRules, initialValue, equalValue, equalName }) => {
    const [value, setValue] = useState<string | undefined>(initialValue);
    const inputElement = useRef<HTMLInputElement | null>(null);
    
    useEffectInitial(() => {
        validate(value);
    }, [equalValue])

    const validate = (value: string | undefined) => {
        if(equalValue){
            inputElement.current?.setCustomValidity(
                equalValue != value 
                    ? equalName + 'are not equal.'
                    : ''
            )
        }
    }

    const onChange = ({target: { value }} : {target : HTMLInputElement} ) => {
        setValue(value)
        validate(value)
    }

    const input = <input name={name} placeholder={placeholder} ref={inputElement} {...validationRules} onChange={onChange}/>

    return input
}

export default useInput