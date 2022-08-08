const people = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'José' },
];

// const newPeople = {};
// for (const person of people) {
//     const { id } = person;
//     newPeople[id] = { ...person };
// }

const newPeople = new Map();
for (const person of people) {
    const { id } = person;
    newPeople.set(id, { ...person });
}

