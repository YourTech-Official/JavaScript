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
  locations: ["New York", "San Francisco", "London"]
};

/* 
// // EFFICIENT CONTENT ONLY - NO BRACKETS OR BRACES:

// // Cache references for better performance
// const employees = company.employees;
// const departments = company.departments;
// const locations = company.locations;

// // 1. Company name
// console.log(company.name);

// // 2. First employee name
// console.log(employees[0].name);

// // 3. Second employee first skill
// console.log(employees[1].skills[0]);

// // 4. Engineering head
// console.log(departments.engineering.head);

// // 5. First employee second project name
// console.log(employees[0].projects[1].name);

// // 6. Design teams - using for...of (faster)
// for (const team of departments.design.teams) {
//     console.log(team);
// }

// // 7. Total employees
// console.log(employees.length);

// // 8. Single efficient loop for all employee data
// for (const employee of employees) {
//     // All project statuses
//     for (const project of employee.projects) {
//         console.log(project.status);
//     }
//     // All skills
//     for (const skill of employee.skills) {
//         console.log(skill);
//     }
// }

// // All locations
// for (const location of locations) {
//     console.log(location);
// }  
*/

// DYNAMIC APPROACH - Handle all data types automatically:
for (const key in company) {
    const data = company[key];
    
    if (typeof data === 'function') {
        console.log(data());
    } else if (Array.isArray(data)) {
        for (const item of data) {
            if (typeof item === 'object') {
                for (const value of Object.values(item)) {
                    if (Array.isArray(value)) {
                        for (const nestedItem of value) {
                            if (typeof nestedItem === 'object') {
                                Object.values(nestedItem).forEach(v => console.log(v));
                            } else {
                                console.log(nestedItem);
                            }
                        }
                    } else if (typeof value === 'object') {
                        Object.values(value).forEach(v => console.log(v));
                    } else {
                        console.log(value);
                    }
                }
            } else {
                console.log(item);
            }
        }
    } else if (typeof data === 'object') {
        for (const value of Object.values(data)) {
            if (Array.isArray(value)) {
                value.forEach(v => console.log(v));
            } else if (typeof value === 'object') {
                Object.values(value).forEach(v => console.log(v));
            } else {
                console.log(value);
            }
        }
    } else {
        console.log(data);
    }
}