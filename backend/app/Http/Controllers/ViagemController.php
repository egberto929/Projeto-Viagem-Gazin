<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Viagem;

class ViagemController extends Controller
{
    public function store(Request $request)
    {
        // Validação dos dados recebidos
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|string',
            'image' => 'required|string',
        ]);

        // Criação do novo registro
        $viagem = Viagem::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'image' => $request->image,
        ]);

        return response()->json($viagem, 201);
    }
}
