let roles = {
  planner: {
    can: ['read', 'write']
  },
  attendee: {
    can: ['read']
  }
};

// Creates a new utility class
function Util () {}

// check user roles
Util.can = function(role, operation) {
  return roles[role] && roles[role].can.indexOf(operation) !== -1;
}
