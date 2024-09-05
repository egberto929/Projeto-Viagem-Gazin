<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AuthController;

use App\Http\Controllers\RegisterController;

use App\Http\Controllers\LoginController;

use App\Http\Controllers\AdminController;

use App\Http\Controllers\UserController;

Route::post('/login', [LoginController::class, 'login']);


Route::post('/register', [RegisterController::class, 'register']);


Route::get('/admin', [AdminController::class, 'admin'])->middleware('auth');


// Rota para listar todos os usuários
Route::get('users', [UserController::class, 'index']);

// Rota para remover um usuário
Route::delete('users/{id}', [UserController::class, 'destroy']);


use App\Http\Controllers\TravelController;

// Rota para listar todas as viagens
Route::get('/travels', [TravelController::class, 'index']);

// Rota para adicionar uma nova viagem
Route::post('/travels', [TravelController::class, 'store']);

// Rota para remover uma viagem existente
Route::delete('/travels/{id}', [TravelController::class, 'destroy']);
