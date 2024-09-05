<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // Verifique se o usuário logado é o administrador
        if ($user->email !== 'egbertoadm@gmail.com') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json(['message' => 'Welcome to the admin panel']);
    }
}
