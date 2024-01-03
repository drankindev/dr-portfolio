/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PagesUpdateFormInputValues = {
    name?: string;
    title?: string;
    path?: string;
    color?: string;
    subtitle?: string;
    body?: string;
    weight?: number;
    media?: string[];
    download?: string;
    categories?: string[];
};
export declare type PagesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    path?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    weight?: ValidationFunction<number>;
    media?: ValidationFunction<string>;
    download?: ValidationFunction<string>;
    categories?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PagesUpdateFormOverridesProps = {
    PagesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    path?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    subtitle?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    media?: PrimitiveOverrideProps<TextFieldProps>;
    download?: PrimitiveOverrideProps<TextFieldProps>;
    categories?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: PagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pages?: any;
    onSubmit?: (fields: PagesUpdateFormInputValues) => PagesUpdateFormInputValues;
    onSuccess?: (fields: PagesUpdateFormInputValues) => void;
    onError?: (fields: PagesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PagesUpdateFormInputValues) => PagesUpdateFormInputValues;
    onValidate?: PagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PagesUpdateForm(props: PagesUpdateFormProps): React.ReactElement;
