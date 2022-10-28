const ROLE = {
    ADMIN: 'admin',
    CLIENT: 'client'
}
  
module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Arun', role: ROLE.ADMIN },
      { id: 2, name: 'Bala', role: ROLE.CLIENT },
      { id: 3, name: 'Varun', role: ROLE.CLIENT }
    ],
    projects: [
      { id: 1, name: "Arun's Project", userId: 1 },
      { id: 2, name: "Bala's Project", userId: 2 },
      { id: 3, name: "Varun's Project", userId: 3 }
    ]
}