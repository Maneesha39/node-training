const client = require('../db')

exports.getUsers = async () => {
    const result = await client.query('select * from users')
    return result.rows;
}
exports.getUsersByID = async (id) => {
    const result = await client.query(`select * from users where id = ${id}`)
    return result.rows[0];
}

exports.insert = async (users) => {
    try {
        const query = 'insert into users (username, firstname, lastname, email, mobile, designation, status, isdeleted ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        const values = [users.username, users.firstname, users.lastname, users.email, users.mobile, users.designation, users.status, users.isdeleted];
        await client.query(query, values);
    }
    catch (err) {
        console.log(err);
        throw 'Cannot insert users';
    }
}
    // return [
    //     {
    //         firstName: 'Mohana Priya',
    //         lastName: 'Manohar',
    //         email: 'mohana@gmail.com',
    //         phone: '8883000721',
    //         designation: 'Trainee',
    //         status: 'Active'
    //     },
    //     {
    //         firstName: 'Priyanka',
    //         lastName: 'Chittibabu',
    //         email: 'priyanka@gmail.com',
    //         phone: '8883000722',
    //         designation: 'Trainee',
    //         status: 'Inactive'
    //     },
    //     {
    //         firstName: 'Maneesha',
    //         lastName: 'Akula',
    //         email: 'maneesha@gmail.com',
    //         phone: '8883000723',
    //         designation: 'Trainee',
    //         status: 'Active'
    //     },
    //     {
    //         firstName: 'Shruthi',
    //         lastName: 'Muthu',
    //         email: 'shruthi@gmail.com',
    //         phone: '8883000724',
    //         designation: 'Trainee',
    //         status: 'Inactive'
    //     },
    //     {
    //         firstName: 'Subha',
    //         lastName: 'Vellapandi',
    //         email: 'subha@gmail.com',
    //         phone: '8883000725',
    //         designation: 'Trainee',
    //         status: 'Active'
    //     },
    //     {
    //         firstName: 'Pradeep',
    //         lastName: 'Kumar',
    //         email: 'pradeep@gmail.com',
    //         phone: '8883000726',
    //         designation: 'Trainee',
    //         status: 'Active'
    //     },
    //     {
    //         firstName: 'Sukumar',
    //         lastName: 'Kuchana',
    //         email: 'sukumar@gmail.com',
    //         phone: '8883000727',
    //         designation: 'Trainee',
    //         status: 'Inactive'
    //     },
    //     {
    //         firstName: 'Venkat',
    //         lastName: 'Puttamsetty',
    //         email: 'venkat@gmail.com',
    //         phone: '8883000728',
    //         designation: 'Trainee',
    //         status: 'Active'
    //     },
    //     {
    //         firstName: 'Jyothi',
    //         lastName: 'Saikam',
    //         email: 'jyothi@gmail.com',
    //         phone: '8883000729',
    //         designation: 'Trainee',
    //         status: 'Inactive'
    //     },
    //     {
    //         firstName: 'Cinni',
    //         lastName: 'Thomas',
    //         email: 'cinni@gmail.com',
    //         phone: '8883000720',
    //         designation: 'Trainee',
    //         status: 'Active'
    //     },
    //     {
    //         firstName: 'Sudha',
    //         lastName: 'Akula',
    //         email: 'sudha@gmail.com',
    //         phone: '9883000729',
    //         designation: 'Trainee',
    //         status: 'Active'
    //     },
    //     {
    //         firstName: 'Naresh',
    //         lastName: 'Beerla',
    //         email: 'naresh@gmail.com',
    //         phone: '9883000720',
    //         designation: 'Trainee',
    //         status: 'Inactive'
    //     }
    // ]
