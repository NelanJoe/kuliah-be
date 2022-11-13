<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(["auth:sanctum"])->group(function () {
    // Get All Student
    Route::get('/students', [StudentController::class, 'index']);
    // Menambahkan student
    Route::post('/students', [StudentController::class, 'store']);
    // Mendapatkan data student
    Route::get('/students/{id}', [StudentController::class, 'show']);
    // Mengubah data sudent
    Route::put('/students/{id}', [StudentController::class, 'update']);
    // Menghapus data student
    Route::delete('/students/{id}', [StudentController::class, 'destroy']);
});

/**
 * * Endpoint Register dan Login
 */
Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);
