<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        // Validação para aceitar apenas arquivos de imagem
        $request->validate([
            'image' => 'required|image|mimes:jpeg,jpg,png,gif,svg|max:20480',
        ]);

        try {
            // Armazenar a imagem no diretório público
            $image = $request->file('image');
            $filePath = $image->store('images', 'public');

        // Salvar o caminho do arquivo no banco de dados
            $newImage = new Image();
            $newImage->file_path = $filePath; 
            $newImage->file_type = $image->getClientOriginalExtension();
            $newImage->save();

            return response()->json([
                'message' => 'Imagem salva com sucesso!',
                'image_id' => $newImage->id,
                'image_url' => url('storage/' . $filePath),
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao salvar a imagem: ' . $e->getMessage()], 500);
        }
    }
}
