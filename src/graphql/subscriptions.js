/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePages = /* GraphQL */ `
  subscription OnCreatePages($filter: ModelSubscriptionPagesFilterInput) {
    onCreatePages(filter: $filter) {
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
export const onUpdatePages = /* GraphQL */ `
  subscription OnUpdatePages($filter: ModelSubscriptionPagesFilterInput) {
    onUpdatePages(filter: $filter) {
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
export const onDeletePages = /* GraphQL */ `
  subscription OnDeletePages($filter: ModelSubscriptionPagesFilterInput) {
    onDeletePages(filter: $filter) {
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
export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags($filter: ModelSubscriptionTagsFilterInput) {
    onCreateTags(filter: $filter) {
      id
      name
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags($filter: ModelSubscriptionTagsFilterInput) {
    onUpdateTags(filter: $filter) {
      id
      name
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags($filter: ModelSubscriptionTagsFilterInput) {
    onDeleteTags(filter: $filter) {
      id
      name
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
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
export const onCreateProjects = /* GraphQL */ `
  subscription OnCreateProjects($filter: ModelSubscriptionProjectsFilterInput) {
    onCreateProjects(filter: $filter) {
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
export const onUpdateProjects = /* GraphQL */ `
  subscription OnUpdateProjects($filter: ModelSubscriptionProjectsFilterInput) {
    onUpdateProjects(filter: $filter) {
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
export const onDeleteProjects = /* GraphQL */ `
  subscription OnDeleteProjects($filter: ModelSubscriptionProjectsFilterInput) {
    onDeleteProjects(filter: $filter) {
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
