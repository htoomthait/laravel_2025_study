import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { route } from 'ziggy-js';

const userInitialState = {
    id: 0,
    name: "",
    email: ""
};

const Edit = ({ userToEdit }) => {

    const [user, setUser] = useState(userInitialState);

    useEffect(() => {
        setUser({
            id: userToEdit.id,
            name: userToEdit.name,
            email: userToEdit.email
        })
    }, [userToEdit])




    const handleOnChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const handleUpdate = () => {
        console.log("update user button clicked", user)

        router.patch(route('users.update', user.id), user)

    }



    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        User Edit
                    </h2>
                }
            >
                <Head title="User Edit" />
                <div className="py-12">
                    <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8 border-2 bg-gray-200 p-4 rounded-lg">
                        <div className="form-group flex flex-col">
                            <div className="w-full  border-gray-200 p-1 rounded flex flex-col">
                                <label className="text-sm font-medium text-gray-900">Name:</label>
                                <input
                                    type="text"
                                    className="border-2 border-gray-200 p-2 rounded-lg"
                                    name="name"
                                    value={user.name}
                                    onChange={handleOnChange}
                                />

                            </div>

                            <div className="w-full  border-gray-200 p-1 rounded flex flex-col">
                                <label className="text-sm font-medium text-gray-900">Email:</label>
                                <input
                                    type="email"
                                    className="border-2 border-gray-200 p-2 rounded-lg"
                                    name="email"
                                    value={user.email}
                                    onChange={handleOnChange}

                                />
                            </div>

                            <div className="mx-auto w-1/3 m-2  border-gray-200 p-1 rounded flex flex-col">
                                <input type="hidden" name="id" value={user.id} />
                                <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleUpdate}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>


            </AuthenticatedLayout>



        </>

    )
}

export default Edit
