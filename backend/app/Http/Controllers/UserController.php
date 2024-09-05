<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    // Função para listar todos os usuários
    public function index()
    {
        return response()->json(User::all());
    }

    // Função para remover um usuário
    public function destroy($id)
    {
        $user = User::find($id);

        if ($user) {
            $user->delete();
            return response()->json(['success' => true, 'message' => 'User deleted successfully']);
        }

        return response()->json(['success' => false, 'message' => 'User not found'], 404);
    }
}
