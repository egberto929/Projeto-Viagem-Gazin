<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json([
                'success' => true,
                'user' => [
                    'email' => $user->email,
                ],
            ]);
        }

        return response()->json(['success' => false, 'message' => 'Unauthorized'], 401);
    }
}


