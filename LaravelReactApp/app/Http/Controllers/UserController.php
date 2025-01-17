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
}
