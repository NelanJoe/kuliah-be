<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PatientController;
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

Route::middleware(["auth:sanctum"])->group(function () {
    // PATIENTS ROUTE
    /**
     * * Route Get all data patients
     * */
    Route::get("/patients", [PatientController::class, "index"]);

    /**
     * * Route Get data patient by id
     * */
    Route::get("/patients/{id}", [PatientController::class, "show"]);

    /**
     * * Route Post data patient
     * */
    Route::post("/patients", [PatientController::class, "store"]);

    /**
     * * Route Delete data patient
     * */
    Route::delete("/patients/{id}", [PatientController::class, "destroy"]);

    // Search Route for Patient
    Route::get("/patients/search/{name}", [PatientController::class, "search"]);

    // Seacrh Route for Patient by Status
    Route::get("/patients/search/status/{status}", [PatientController::class, "searchByStatus"]);
});

// AUTH ROUTE
Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);
