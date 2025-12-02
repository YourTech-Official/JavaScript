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
        { name: "Mobile App", status: "ongoing", duration: 4 },
      ],
    },
    {
      id: 2,
      name: "Sarah",
      position: "Designer",
      skills: ["Photoshop", "Figma", "CSS"],
      salary: 65000,
      projects: [
        { name: "Website Redesign", status: "completed", duration: 3 },
        { name: "Logo Design", status: "pending", duration: 2 },
      ],
    },
  ],

  departments: {
    engineering: {
      head: "Mike Johnson",
      budget: 500000,
      teams: ["Frontend", "Backend", "DevOps"],
    },
    design: {
      head: "Lisa Chen",
      budget: 200000,
      teams: ["UI/UX", "Graphics"],
    },
  },
  locations: ["New York", "San Francisco", "London"],
  getInfo: function () {
    return `${this.name} founded in ${this.founded}`;
  },
  calculateTotalSalary: function () {
    return this.employees.reduce((total, emp) => total + emp.salary, 0);
  },
};

// console.log(company.calculateTotalSalary());
// for (const key in company) {
//   const data = company[key];
//   if (typeof data === "function") {
//     // console.log(data.call(company));
//   } else if (Array.isArray(data)) {
//     //   console.log(data);
//     for (const arr of data) {
//       // console.log(arr);
//       for (const empObj in arr) {
//         //   console.log(arr[empObj]);
//         const skills = arr[empObj];
//         if (Array.isArray(skills)) {
//           for (const skill of skills) {
//             // console.log(skill);
//             if (typeof skill === "object") {
//               // console.log(Object.values(skill));
//               for (const project in skill) {
//                 //   console.log(project, skill[project]);
//               }
//             }
//           }
//         }
//       }
//     }
//   } else if (typeof data === 'object') {
//       for (const dep in data) {
//         //   console.log(data[dep]);
//           const depdata = data[dep];
//           for (const depEmp in depdata) {
//             //   console.log(depdata[depEmp]);
//               const empSkill = depdata[depEmp];
//               if (Array.isArray(empSkill)) {
//                   for (const skil of empSkill) {
//                       console.log(skil);
//                   }
//               }
//           }
         
//       }
//   }
// }

// ========== ORGANIZED VERSION WITH COMMENTS ==========
console.log("\n=== TRAVERSING COMPANY OBJECT ===");

// Iterate through each property of the company object
for (const propertyKey in company) {
  const propertyValue = company[propertyKey];
  
  console.log(`\n--- Processing property: ${propertyKey} ---`);
  
  // Handle function properties
  if (typeof propertyValue === "function") {
    console.log(`${propertyKey} is a function:`, propertyValue.call(company));
  } 
  // Handle array properties (employees, locations)
  else if (Array.isArray(propertyValue)) {
    console.log(`${propertyKey} array contents:`);
    
    // Iterate through each array item
    for (const arrayItem of propertyValue) {
      // If array item is a primitive, show it directly
      if (typeof arrayItem !== "object") {
        console.log(`  ${arrayItem}`);
      }
      // If array item is an object, show its key-value pairs
      else if (arrayItem !== null) {
        for (const objectKey in arrayItem) {
          const objectValue = arrayItem[objectKey];
          
          // If property is an array (like skills or projects), show individual items
          if (Array.isArray(objectValue)) {
            for (const nestedArrayItem of objectValue) {
              // If nested array item is primitive, show it
              if (typeof nestedArrayItem !== "object") {
                console.log(`  ${nestedArrayItem}`);
              }
              // If nested array item is an object (like project objects), show key-value pairs
              else if (nestedArrayItem !== null) {
                for (const nestedObjectKey in nestedArrayItem) {
                  console.log(`  ${nestedObjectKey}: ${nestedArrayItem[nestedObjectKey]}`);
                }
              }
            }
          }
          // If property is primitive, show key-value pair
          else {
            console.log(`  ${objectKey}: ${objectValue}`);
          }
        }
      }
    }
  } 
  // Handle object properties (departments)
  else if (typeof propertyValue === 'object' && propertyValue !== null) {
    // Iterate through each department
    for (const departmentKey in propertyValue) {
      const departmentData = propertyValue[departmentKey];
      
      // Iterate through each department property
      for (const departmentProperty in departmentData) {
        const departmentPropertyValue = departmentData[departmentProperty];
        
        // If department property is an array (like teams), show individual items
        if (Array.isArray(departmentPropertyValue)) {
          for (const teamItem of departmentPropertyValue) {
            console.log(`  ${teamItem}`);
          }
        }
        // If department property is primitive, show key-value pair
        else {
          console.log(`  ${departmentProperty}: ${departmentPropertyValue}`);
        }
      }
    }
  }
  // Handle primitive properties (name, founded)
  else {
    console.log(`${propertyKey}:`, propertyValue);
  }
}

console.log("\n=== TRAVERSAL COMPLETE ===");


