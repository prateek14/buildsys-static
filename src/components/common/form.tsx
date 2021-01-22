import React, { Fragment, PropsWithChildren } from 'react';
import { Dictionary } from '../../abstract/interfaces';

export interface FormEntry {
    placeholder?: string;
    type?: string;
    label?: string;
    required?: boolean;
    requiredError?: string;
    size?: 'half' | 'full';
    isValid?: (v: string | File) => boolean;
}

export type FormProps = PropsWithChildren<{
    className?: string;
    data: Dictionary<FormEntry>;
    onSubmit: (d: FormData, t: HTMLFormElement) => void;
    onError: (errors: Dictionary<string>) => void;
}>;

export const Form: React.FunctionComponent<FormProps> = (props: FormProps): JSX.Element => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const target = event.target as HTMLFormElement;
        const data = new FormData(target);
        const errors: Dictionary<string> = {};
        Object.keys(props.data).forEach((key) => {
            const entry = props.data[key];
            if (entry.required) {
                const valid = data.has(key) && (data.get(key) as string).trim().length > 0;
                if (!valid) {
                    errors[key] = entry.requiredError || entry.label + ' is required.';
                }
            }
        });

        if (Object.keys(errors).length === 0) {
            props.onSubmit(data, target);
            props.onError(errors);
        } else {
            props.onError(errors);
        }

        event.preventDefault();
    };
    return (
        <form className={props.className} onSubmit={handleSubmit}>
            {props.children}
        </form>
    );
};

export const FormEntryToElement = (id: string, entry: FormEntry, error?: string): JSX.Element => {
    const requiredStar = entry.required ? ' *' : '';
    switch (entry.type) {
        case 'textarea':
            return (
                <Fragment>
                    <label htmlFor={id}>{entry.label + requiredStar}</label>
                    <textarea id={id} name={id} placeholder={entry.placeholder + requiredStar} rows={10}></textarea>
                    {error && <div className="form-error">{error}</div>}
                </Fragment>
            );
        case 'text':
        case 'tel':
        case 'email':
            return (
                <Fragment>
                    <label htmlFor={id}>{entry.label + requiredStar}</label>
                    <input id={id} name={id} type={entry.type} placeholder={entry.placeholder + requiredStar}></input>
                    {error && <div className="form-error">{error}</div>}
                </Fragment>
            );
    }
    return <Fragment></Fragment>;
};
