// Remove all data
db.customers.remove({});

const issuesDB = [
  {
    _id: 1,
    name: "Kylie",
    hp: "99665544",
    timestamp: new Date("October 30, 2021 23:15:30").toString(),
  },

  {
    _id: 2,
    name: "Nithiya",
    hp: "87171086",
    timestamp: new Date("October 30, 2021 23:15:30").toString(),
  },

  {
    _id: 3,
    name: "Gary",
    hp: "985421365",
    timestamp: new Date("October 30, 2021 23:15:30").toString(),
  },
];

// Insert Data
db.customers.insertMany(issuesDB);
const count = db.customers.count();
print("Inserted", count, "customers");

// Read and display all data
for (i = 0; i < db.customers.count(); i++) {
  print(JSON.stringify(db.customers.find({})[i]));
}

// Remove data
db.customers.deleteOne({ _id: 1 });
print("records", db.customers.count());
