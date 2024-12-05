type Employee = {
    name: string;
    startDate: number;
};

type Manager = {
    name: string;
    department: string;
};


type TeamLead = Employee | Manager;

let emp: Employee = {
    name: "Arjun",
    startDate: 051224,
};

let manger: Manager = {
    name: "raman",
    department: "IT"
};



let teamLead: TeamLead = {
    name: "kirath",
    startDate: 20240807,
    department: "HR"
};