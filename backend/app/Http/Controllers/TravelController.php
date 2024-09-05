<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Travel;

class TravelController extends Controller
{
    public function index()
    {
        $travels = Travel::all();
        return response()->json($travels);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $travel = Travel::create($validated);
        return response()->json($travel, 201);
    }

    public function destroy($id)
    {
        $travel = Travel::find($id);

        if ($travel) {
            $travel->delete();
            return response()->json(['message' => 'Viagem removida com sucesso']);
        }

        return response()->json(['message' => 'Viagem não encontrada'], 404);
    }
}
