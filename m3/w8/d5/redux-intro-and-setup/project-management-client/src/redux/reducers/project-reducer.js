
const initialState = {
  projects: []
}   // <ABC123>

const projectReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload]
      }

    case 'ADD_ALL_PROJECTS':
      const arrayOfProjects = action.payload;
      return {
        ...state,
        projects: [...state.projects, ...arrayOfProjects]
      }

    default:
      return state;
  }

}

export default projectReducer;