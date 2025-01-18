<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function loadUser()
    {
        $users = User::all();

        return Inertia::render('Users/Users', ['users' => $users]);
    }

    public function show(User $user)
    {

        return Inertia::render('Users/Edit', ['userToEdit' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->all());

        return redirect()->route('users.index');
    }


    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index');
    }
}
