/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPages = /* GraphQL */ `
  mutation CreatePages(
    $input: CreatePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    createPages(input: $input, condition: $condition) {
      id
      name
      title
      path
      color
      subtitle
      body
      weight
      media
      download
      categories
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePages = /* GraphQL */ `
  mutation UpdatePages(
    $input: UpdatePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    updatePages(input: $input, condition: $condition) {
      id
      name
      title
      path
      color
      subtitle
      body
      weight
      media
      download
      categories
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePages = /* GraphQL */ `
  mutation DeletePages(
    $input: DeletePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    deletePages(input: $input, condition: $condition) {
      id
      name
      title
      path
      color
      subtitle
      body
      weight
      media
      download
      categories
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTags = /* GraphQL */ `
  mutation CreateTags(
    $input: CreateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    createTags(input: $input, condition: $condition) {
      id
      name
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $input: UpdateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    updateTags(input: $input, condition: $condition) {
      id
      name
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $input: DeleteTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    deleteTags(input: $input, condition: $condition) {
      id
      name
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
      id
      title
      hires
      url
      projectsID
      weight
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
      id
      title
      hires
      url
      projectsID
      weight
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
      id
      title
      hires
      url
      projectsID
      weight
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProjects = /* GraphQL */ `
  mutation CreateProjects(
    $input: CreateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    createProjects(input: $input, condition: $condition) {
      id
      name
      title
      body
      category
      weight
      media {
        items {
          id
          title
          hires
          url
          projectsID
          weight
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tags
      url
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProjects = /* GraphQL */ `
  mutation UpdateProjects(
    $input: UpdateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    updateProjects(input: $input, condition: $condition) {
      id
      name
      title
      body
      category
      weight
      media {
        items {
          id
          title
          hires
          url
          projectsID
          weight
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tags
      url
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProjects = /* GraphQL */ `
  mutation DeleteProjects(
    $input: DeleteProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    deleteProjects(input: $input, condition: $condition) {
      id
      name
      title
      body
      category
      weight
      media {
        items {
          id
          title
          hires
          url
          projectsID
          weight
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tags
      url
      createdAt
      updatedAt
      __typename
    }
  }
`;
