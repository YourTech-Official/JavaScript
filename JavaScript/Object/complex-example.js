const company = {
  name: "TechCorp",
  founded: 2010,
  employees: [
    {
      id: 1,
      name: "John",
      position: "Developer",
      skills: ["JavaScript", "React", "Node.js"],
      salary: 75000,
      projects: [
        { name: "E-commerce", status: "completed", duration: 6 },
        { name: "Mobile App", status: "ongoing", duration: 4 }
      ]
    },
    {
      id: 2,
      name: "Sarah",
      position: "Designer",
      skills: ["Photoshop", "Figma", "CSS"],
      salary: 65000,
      projects: [
        { name: "Website Redesign", status: "completed", duration: 3 },
        { name: "Logo Design", status: "pending", duration: 2 }
      ]
    }
  ],
  departments: {
    engineering: {
      head: "Mike Johnson",
      budget: 500000,
      teams: ["Frontend", "Backend", "DevOps"]
    },
    design: {
      head: "Lisa Chen",
      budget: 200000,
      teams: ["UI/UX", "Graphics"]
    }
  },
  locations: ["New York", "San Francisco", "London"],
  getInfo: function() {
    return `${this.name} founded in ${this.founded}`;
  },
  calculateTotalSalary: function() {
    return this.employees.reduce((total, emp) => total + emp.salary, 0);
  }
};

// // SOLUTIONS WITH COMMENTS:

// // 1. Company name - direct property access
// console.log("1. Company name:", company.name);
// // Output: TechCorp

// // 2. First employee's name - array[0] then property
// console.log("2. First employee name:", company.employees[0].name);
// // employees is array, [0] = first employee, .name = property
// // Output: John

// // 3. Second employee's first skill - array[1] then array[0]
// console.log("3. Second employee first skill:", company.employees[1].skills[0]);
// // employees[1] = second employee, skills[0] = first skill
// // Output: Photoshop

// // 4. Engineering department head - nested object access
// console.log("4. Engineering head:", company.departments.engineering.head);
// // departments.engineering.head = nested property
// // Output: Mike Johnson

// // 5. First employee's second project name - deep nesting
// console.log("5. First employee second project:", company.employees[0].projects[1].name);
// // employees[0] = first employee, projects[1] = second project, .name = property
// // Output: Mobile App

// // 6. All team names from design department - array access
// console.log("6. Design teams:", company.departments.design.teams);
// // departments.design.teams = array of teams
// // Output: ["UI/UX", "Graphics"]

// // 7. Total number of employees - array length
// console.log("7. Total employees:", company.employees.length);
// // .length gives array size
// // Output: 2

// // 8. All project statuses from all employees - complex iteration
// console.log("8. All project statuses:");
// company.employees.forEach(employee => {
//     employee.projects.forEach(project => {
//         console.log(`${employee.name} - ${project.name}: ${project.status}`);
//     });
// });
// Loop through employees, then through each employee's projects

// BONUS: Using functions
console.log("Company info:", company.getInfo());
console.log("Total salary:", company.calculateTotalSalary());

for (const key in company) {
  const data = company[key];
  console.log(data)
}