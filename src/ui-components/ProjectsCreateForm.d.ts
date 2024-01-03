/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectsCreateFormInputValues = {
    name?: string;
    title?: string;
    body?: string;
    category?: string;
    weight?: number;
    tags?: string[];
    url?: string;
};
export declare type ProjectsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    weight?: ValidationFunction<number>;
    tags?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsCreateFormOverridesProps = {
    ProjectsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjectsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjectsCreateFormInputValues) => ProjectsCreateFormInputValues;
    onSuccess?: (fields: ProjectsCreateFormInputValues) => void;
    onError?: (fields: ProjectsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectsCreateFormInputValues) => ProjectsCreateFormInputValues;
    onValidate?: ProjectsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectsCreateForm(props: ProjectsCreateFormProps): React.ReactElement;
