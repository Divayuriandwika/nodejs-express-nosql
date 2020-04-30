const { User } = require ("../../models");

module.exports = {
    getAll : async (req, res) => {
        try {
            const users = await User.find({});

            res.status (200).json ({
                message : "Get all Users",
                data : users,
            })
        } catch (error) {
            console.log(error);
            
        }
    },

    create : async (req, res) => {
        try {
            const { fullname, username, email, password } = req.body;

            const users = await User.create({
                fullname,
                username,
                email,
                password,
            })

            res.status(201).json ({ message : "Create is succes", data: users })

        } catch (error) {
            console.log(error);
            
        }
    },


    // deleteByID: async (req,res) => {
    //     try {
    //         const { id } = req.params;

    //         const users = await User.splice (id , 1)

    //         res.status (200).json ({
    //             message : "Get all Users",
    //             data : users,
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}