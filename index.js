
const Users = {
    12: {
        name: "Sanju Rajput",
        age: 21,
        isMarried: "no"
    },
    13: {
        name: "Yashika Jain",
        age: 22,
        isMarried: "no"
    },
    11: {
        name: "Udit",
        age: 20,
        isMarried: "no"
    },
    15: {
        name: "Sparsh Mathur",
        age: 20,
        isMarried: "no"
    },
}

module.exports.handler = async (event) => {
    console.log(event)
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: "This is sample project based on serverless"
    }
}



module.exports.getUser = async (event) => {
    console.log("get user events ", event)

    const ID = event.pathParameters.ID
    if (!ID) {
        return {
            status: 400,
            headers: {
                "Content-Type": "application/json"
            },
            body: "Id parameter is missing"
        }
    }
    const user = Users[ID]
    if (!user) {
        return {
            statusCode: 404,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ alert: `User not exist with ${ID}` })
        }
    }
    else {
        return {
            statusCode: 404,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user })
        }
    }

}