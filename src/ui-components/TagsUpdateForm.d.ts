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
export declare type TagsUpdateFormInputValues = {
    name?: string;
    title?: string;
};
export declare type TagsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TagsUpdateFormOverridesProps = {
    TagsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TagsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TagsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tags?: any;
    onSubmit?: (fields: TagsUpdateFormInputValues) => TagsUpdateFormInputValues;
    onSuccess?: (fields: TagsUpdateFormInputValues) => void;
    onError?: (fields: TagsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TagsUpdateFormInputValues) => TagsUpdateFormInputValues;
    onValidate?: TagsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TagsUpdateForm(props: TagsUpdateFormProps): React.ReactElement;
