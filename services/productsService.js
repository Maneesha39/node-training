const client = require('../db')

exports.getProducts = async () => {
    const result = await client.query('select * from products')
    return result.rows;
}

exports.getProductsByID = async (id) => {
    const result = await client.query(`select * from products where id = ${id}`)
    return result.rows[0];
}

exports.insert = async (username, manufacturerId, products) => {
    try {
        const query = 'insert into products (name, code, manufacturer_id, price, description, quantity, created_at, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        const values = [products.name, products.code, manufacturerId, products.price, products.description, products.quantity, new Date(), username];
        await client.query(query, values);
    }
    catch (err) {
        console.log(err);
        throw 'Cannot insert product';
    }
}