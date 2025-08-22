// Import datejs
require('datejs');

// Combine user array to one object 
function combineUsers(...args) {
  const combinedObject = { users: [] };

  // Add users from arrays
  for (const arr of args) {
    combinedObject.users.push(...arr);
  }

  // Add Today's Date 
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");
  
  return combinedObject;
}

module.exports = { 
  ...(typeof combineUsers !== 'undefined' && { combineUsers }) 
};