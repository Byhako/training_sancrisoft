
export function addGoal (goal) {
  return { type: 'ADD_GOAL', goal }
}

export function removeGoal (id) {
  return { type: 'REMOVE_GOAL', id }
}
