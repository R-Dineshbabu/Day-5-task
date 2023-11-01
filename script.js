// 1.for the given JSON iterate over all the loops (for,for in,for of,forEach)
// for loop
const jsonObject = {
    name: "John",
    age: 30,
    city: "New York",
  };

  // for in
  for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      console.log(key + ": " + jsonObject[key]);
    }
  }
  // for of
for (let [key, value] of Object.entries(jsonObject)) {
    console.log(key + ": " + value);
  }
  // for each
  const jsonArray = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
  ];
  
  jsonArray.forEach((item) => {
    console.log(item.name + ": " + item.age);
  });
// for loop
const jsonObject1 = {
    name: "John",
    age: 30,
    city: "New York",
  };
  
  const keys = Object.keys(jsonObject);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = jsonObject[key];
    console.log(key + ": " + value);
  }

  //create a own resume data in JSON format
  let resume=
  {

    "name":"Dinesh",
    "contact": {
      "email": "dineshsachin395@gmail.com",
      "phone": "9345051425",
      "address": "28/31 marriamman kovil street, vellore, INDIA"
    },
    "summary": "Experienced web developer with a passion for creating efficient and user-friendly web applications.",
    "education": [
      {
        "degree": "B.E COMPUTER SCIENCE",
        "school": "PANIMALAR ENGINEERING COLLEGE",
        "year": "2019-2023"
      },
      {
        "degree": "Web Development Certification",
        "school": "GUVI",
        "year": "2023"
      }
    ],
    "experience": [
      {
        "position": "Full-Stack Developer",
        "company": "GUVI.",
        "date": "2024-2025",
        "description": "Developed and maintained web applications using HTML, CSS, JavaScript, and various web frameworks."
      },
      {
        "position": "Junior Web Developer",
        "company": "AMAZON",
        "date": "2025-2028",
        "description": "Assisted in front-end and back-end development tasks and gained hands-on experience with modern web technologies."
      }
    ],
    "skills": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "Git",
      
    ],
    "languages": ["English (Fluent)", ],
    "interests": [
      "Open Source Development",
      "Machine Learning",
      "Photography"
    ]
  }
  console.log(resume);
  
  
  
  
  



  

  