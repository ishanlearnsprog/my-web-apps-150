db = connect('mongodb://localhost/trackr');

db.categories.insertMany([
    {
        name: "Food & Drinks",
        parent: "none",
        user: "all",
    },
    {
        name: "Shopping",
        parent: "none",
        user: "all",
    },
    {
        name: "Housing",
        parent: "none",
        user: "all",
    },
    {
        name: "Transportation",
        parent: "none",
        user: "all",
    },
    {
        name: "Vehicle",
        parent: "none",
        user: "all",
    },
    {
        name: "Life & Entertaintment",
        parent: "none",
        user: "all",
    },
    {
        name: "Computers",
        parent: "none",
        user: "all",
    },
    {
        name: "Mobiles",
        parent: "none",
        user: "all",
    },
    {
        name: "Electronics",
        parent: "none",
        user: "all",
    },
    {
        name: "Financial Expenses",
        parent: "none",
        user: "all",
    },
    {
        name: "Investments",
        parent: "none",
        user: "all",
    },
    {
        name: "Income",
        parent: "none",
        user: "all",
    },
    {
        name: "Others",
        parent: "none",
        user: "all",
    },
    {
        name: "Unkown",
        parent: "none",
        user: "all",
    }
])