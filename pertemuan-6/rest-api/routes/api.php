<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;
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
 * * Membuat Route get Mahasiswa
 * * GET
 * */

Route::get('/students', [StudentController::class, 'index']);


/**
 * * Membuat Route post Mahasiswa
 * * POST 
 * */

Route::post('/students', [StudentController::class, 'store']);

/**
 * * Membuat Route get mahasiswa by id
 * * GET 
 * */

Route::get('/students/{id}', [StudentController::class, 'show']);


/**
 * * Membuat update mahasiswa
 * * PUT
 * */

Route::put('/students/{id}', [StudentController::class, 'update']);

/**
 * * Membuat update mahasiswa
 * * DELETE
 * */

Route::delete('/students/{id}', [StudentController::class, 'destroy']);
