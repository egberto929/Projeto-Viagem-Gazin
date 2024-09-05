<?php

use App\Http\Controllers\AdminController;

Route::get('/admin', [AdminController::class, 'index'])->middleware('auth');
