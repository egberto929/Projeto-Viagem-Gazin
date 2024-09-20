<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservaController extends Controller
{
    public function store(Request $request)
    {
        // Valida a entrada
        $request->validate([
            'user_id' => 'required|integer',
            'viagem_title' => 'required|string',
            'price' => 'required|string',
        ]);

        try {
            $reserva = new Reserva();
            $reserva->user_id = $request->input('user_id');
            $reserva->viagem_title = $request->input('viagem_title');

            // Trata o valor do preço
            $price = str_replace('.', '', $request->input('price'));
            $price = str_replace(',', '.', $price);
            $reserva->price = floatval($price);

            $reserva->save();

            return response()->json([
                'message' => 'Reserva confirmada com sucesso!',
                'reserva' => $reserva
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Não foi possível confirmar a reserva.'], 500);
        }
    }

    public function index()
    {
        $reservas = DB::select('
        SELECT 
            r.id
           ,u.name
           ,r.viagem_title
           ,FORMAT(r.price, 2, "de_DE") AS price
           ,r.created_at
        FROM reservas r 
        LEFT JOIN users u ON u.id = r.user_id
    ');

        return response()->json(['reservas' => $reservas]);
    }
}
