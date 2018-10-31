const initState = {
  projects: [
    {id: '1', title: 'Project 1', content: 'update specs'},
    {id: '2', title: 'Project 1 - code update', content: 'push version 2.0 to production'},
    {id: '3', title: 'Project 2 - update design specs', content: 'update design specs from Peter'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
    console.log('created project', action.project);
    return state;
    case 'CREATE_PROJECT_ERROR':
    console.log('create project error', action.err);
    return state;
    
    default:
    return state;
      
  }
  

}


export default projectReducer
