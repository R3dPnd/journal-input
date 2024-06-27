# Redux

## What is Redux?

Redux is a library the allows a global state management.

## Setup

npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0

## Design

### Actions

Search NPM 
1. Reach out to registry.npmjs.org/-/v1/search?text={keyword}
2. Look at NPM 'repositories' which are packages we are avoiding the keyword for
3. repositories object 

{
    
    data: string[],
    loading: boolean
    error: string

}
Action Creators

1. searchRepositories(term)

Actions
1. SearchRepositories
2. SearchRepositoriesSuccess
3. SearchRepositoriesError

Action Types
1.
2.
3.

Redux Store

### Structure

{
    
    components: 
    {
        index.ts: 
        {
            App.tsx: 
            RepositoriesList.tsx:
        }
    }
}

# References
https://redux.js.org/
