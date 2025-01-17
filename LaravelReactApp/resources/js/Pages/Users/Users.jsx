import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Users = ({ users }) => {
    console.log(users);
    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        User List
                    </h2>
                }
            >
                <Head title="User List" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">


                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                <thead className="ltr:text-left rtl:text-right">
                                    <tr>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Registeration</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Last Update</th>
                                        <th className="px-4 py-2"></th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.name}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.created_at}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.updated_at}</td>
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <a
                                                    href="#"
                                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                                >
                                                    View
                                                </a>
                                            </td>
                                        </tr>
                                    ))}





                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </AuthenticatedLayout>

        </>
    )
}

export default Users
