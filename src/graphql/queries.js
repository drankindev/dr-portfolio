/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPages = /* GraphQL */ `
  query GetPages($id: ID!) {
    getPages(id: $id) {
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
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
      id
      name
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        title
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
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
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedia(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const mediaByProjectsID = /* GraphQL */ `
  query MediaByProjectsID(
    $projectsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mediaByProjectsID(
      projectsID: $projectsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getProjects = /* GraphQL */ `
  query GetProjects($id: ID!) {
    getProjects(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
