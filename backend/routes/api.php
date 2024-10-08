<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\ImageController;

Route::post('/login', [LoginController::class, 'login']);

Route::post('/register', [RegisterController::class, 'register']);

Route::get('/admin', [AdminController::class, 'admin'])->middleware('auth');

// Rota para listar todos os usuários
Route::get('users', [UserController::class, 'index']);

// Rota para remover um usuário
Route::delete('users/{id}', [UserController::class, 'destroy']);

Route::post('/reservas', [ReservaController::class, 'store']);

Route::get('/reservas', [ReservaController::class, 'index']);

Route::post('/images', [ImageController::class, 'store']);