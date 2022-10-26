<?php

use App\Http\Controllers\AnimalController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/**
 * * Membuat route get
 * * - Menampilkan semua data animals
 * */
Route::get('/animals', [AnimalController::class, 'index']);


/**
 * * Membuat route post
 * * - Menambahkan data animal
 * */
Route::post("/animals", [AnimalController::class, 'store']);



/**
 * * Membuat route put
 * * - Mengupdate data animal
 * */
Route::put("/animals/{id}", [AnimalController::class, 'update']);



/**
 * * Membuat route delete
 * * - Menghapus data animal
 * */
Route::delete("/animals/{id}", [AnimalController::class, 'destroy']);
