/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPages } from "../graphql/queries";
import { updatePages } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PagesUpdateForm(props) {
  const {
    id: idProp,
    pages: pagesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    title: "",
    path: "",
    color: "",
    subtitle: "",
    body: "",
    weight: "",
    media: [],
    download: "",
    categories: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [title, setTitle] = React.useState(initialValues.title);
  const [path, setPath] = React.useState(initialValues.path);
  const [color, setColor] = React.useState(initialValues.color);
  const [subtitle, setSubtitle] = React.useState(initialValues.subtitle);
  const [body, setBody] = React.useState(initialValues.body);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [media, setMedia] = React.useState(initialValues.media);
  const [download, setDownload] = React.useState(initialValues.download);
  const [categories, setCategories] = React.useState(initialValues.categories);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pagesRecord
      ? { ...initialValues, ...pagesRecord }
      : initialValues;
    setName(cleanValues.name);
    setTitle(cleanValues.title);
    setPath(cleanValues.path);
    setColor(cleanValues.color);
    setSubtitle(cleanValues.subtitle);
    setBody(cleanValues.body);
    setWeight(cleanValues.weight);
    setMedia(cleanValues.media ?? []);
    setCurrentMediaValue("");
    setDownload(cleanValues.download);
    setCategories(cleanValues.categories ?? []);
    setCurrentCategoriesValue("");
    setErrors({});
  };
  const [pagesRecord, setPagesRecord] = React.useState(pagesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPages.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPages
        : pagesModelProp;
      setPagesRecord(record);
    };
    queryData();
  }, [idProp, pagesModelProp]);
  React.useEffect(resetStateValues, [pagesRecord]);
  const [currentMediaValue, setCurrentMediaValue] = React.useState("");
  const mediaRef = React.createRef();
  const [currentCategoriesValue, setCurrentCategoriesValue] =
    React.useState("");
  const categoriesRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    title: [],
    path: [],
    color: [],
    subtitle: [],
    body: [],
    weight: [],
    media: [],
    download: [],
    categories: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          title: title ?? null,
          path: path ?? null,
          color: color ?? null,
          subtitle: subtitle ?? null,
          body: body ?? null,
          weight: weight ?? null,
          media: media ?? null,
          download: download ?? null,
          categories: categories ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePages.replaceAll("__typename", ""),
            variables: {
              input: {
                id: pagesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PagesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              title,
              path,
              color,
              subtitle,
              body,
              weight,
              media,
              download,
              categories,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title: value,
              path,
              color,
              subtitle,
              body,
              weight,
              media,
              download,
              categories,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Path"
        isRequired={false}
        isReadOnly={false}
        value={path}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              path: value,
              color,
              subtitle,
              body,
              weight,
              media,
              download,
              categories,
            };
            const result = onChange(modelFields);
            value = result?.path ?? value;
          }
          if (errors.path?.hasError) {
            runValidationTasks("path", value);
          }
          setPath(value);
        }}
        onBlur={() => runValidationTasks("path", path)}
        errorMessage={errors.path?.errorMessage}
        hasError={errors.path?.hasError}
        {...getOverrideProps(overrides, "path")}
      ></TextField>
      <TextField
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              path,
              color: value,
              subtitle,
              body,
              weight,
              media,
              download,
              categories,
            };
            const result = onChange(modelFields);
            value = result?.color ?? value;
          }
          if (errors.color?.hasError) {
            runValidationTasks("color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("color", color)}
        errorMessage={errors.color?.errorMessage}
        hasError={errors.color?.hasError}
        {...getOverrideProps(overrides, "color")}
      ></TextField>
      <TextField
        label="Subtitle"
        isRequired={false}
        isReadOnly={false}
        value={subtitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              path,
              color,
              subtitle: value,
              body,
              weight,
              media,
              download,
              categories,
            };
            const result = onChange(modelFields);
            value = result?.subtitle ?? value;
          }
          if (errors.subtitle?.hasError) {
            runValidationTasks("subtitle", value);
          }
          setSubtitle(value);
        }}
        onBlur={() => runValidationTasks("subtitle", subtitle)}
        errorMessage={errors.subtitle?.errorMessage}
        hasError={errors.subtitle?.hasError}
        {...getOverrideProps(overrides, "subtitle")}
      ></TextField>
      <TextField
        label="Body"
        isRequired={false}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              path,
              color,
              subtitle,
              body: value,
              weight,
              media,
              download,
              categories,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              title,
              path,
              color,
              subtitle,
              body,
              weight: value,
              media,
              download,
              categories,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              title,
              path,
              color,
              subtitle,
              body,
              weight,
              media: values,
              download,
              categories,
            };
            const result = onChange(modelFields);
            values = result?.media ?? values;
          }
          setMedia(values);
          setCurrentMediaValue("");
        }}
        currentFieldValue={currentMediaValue}
        label={"Media"}
        items={media}
        hasError={errors?.media?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("media", currentMediaValue)
        }
        errorMessage={errors?.media?.errorMessage}
        setFieldValue={setCurrentMediaValue}
        inputFieldRef={mediaRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Media"
          isRequired={false}
          isReadOnly={false}
          value={currentMediaValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.media?.hasError) {
              runValidationTasks("media", value);
            }
            setCurrentMediaValue(value);
          }}
          onBlur={() => runValidationTasks("media", currentMediaValue)}
          errorMessage={errors.media?.errorMessage}
          hasError={errors.media?.hasError}
          ref={mediaRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "media")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Download"
        isRequired={false}
        isReadOnly={false}
        value={download}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              title,
              path,
              color,
              subtitle,
              body,
              weight,
              media,
              download: value,
              categories,
            };
            const result = onChange(modelFields);
            value = result?.download ?? value;
          }
          if (errors.download?.hasError) {
            runValidationTasks("download", value);
          }
          setDownload(value);
        }}
        onBlur={() => runValidationTasks("download", download)}
        errorMessage={errors.download?.errorMessage}
        hasError={errors.download?.hasError}
        {...getOverrideProps(overrides, "download")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              title,
              path,
              color,
              subtitle,
              body,
              weight,
              media,
              download,
              categories: values,
            };
            const result = onChange(modelFields);
            values = result?.categories ?? values;
          }
          setCategories(values);
          setCurrentCategoriesValue("");
        }}
        currentFieldValue={currentCategoriesValue}
        label={"Categories"}
        items={categories}
        hasError={errors?.categories?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("categories", currentCategoriesValue)
        }
        errorMessage={errors?.categories?.errorMessage}
        setFieldValue={setCurrentCategoriesValue}
        inputFieldRef={categoriesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Categories"
          isRequired={false}
          isReadOnly={false}
          value={currentCategoriesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.categories?.hasError) {
              runValidationTasks("categories", value);
            }
            setCurrentCategoriesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("categories", currentCategoriesValue)
          }
          errorMessage={errors.categories?.errorMessage}
          hasError={errors.categories?.hasError}
          ref={categoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "categories")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pagesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pagesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
