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
  ],
  departments: {
    engineering: {
      head: "Mike Johnson",
      budget: 500000,
      teams: ["Frontend", "Backend", "DevOps"],
    },
  },
  locations: ["New York", "San Francisco", "London"],
};

for (key in company) {
  // console.log(company[key]);
  const data = company[key];
  if (Array.isArray(data)) {
    // data.forEach(d => {
    //     console.log(d);
    // })
    if (typeof data === "object")
      for (key in data) {
        const empData = data[key];
        for (const emp_data in empData) {
          console.log(empData[emp_data]);
          
        }
      }
  }
}
