<?php

namespace App\Http\Controllers;

use App\Helpers\ApiFormatter;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * * Refactor method menggunakan helper dengan menggunakan ApiFormatter
     */


    /**
     * * Get all data patients
     * */
    public function index()
    {
        /**
         * * Cek data patients jika ada maka return data patients
         * * Jika tidak ada maka return data kosong
         * */
        $patients = Patient::all();


        if (!empty($patients)) {
            return ApiFormatter::createApi(200, "Get All Resource", $patients);
        } else {
            return ApiFormatter::createApi(404, "Patients not found");
        }
    }

    /**
     * * Create data patients
     * */
    public function store(Request $request)
    {
        // * Memvalidasi data yang akan diinputkan 
        $request->validate([
            "name" => "required",
            "phone" => "required|max:13",
            "address" => "required",
            "status" => "required",
            "in_date_at" => "required",
        ]);

        $input = [
            "name" => $request->name,
            "phone" => $request->phone,
            "address" => $request->address,
            "status" => $request->status,
            "in_date_at" => $request->in_date_at,
            "out_date_at" => $request->out_date_at ?? null,
        ];

        $patient = Patient::create($input);

        return ApiFormatter::createApi(201, "Resource is added successfully", $patient);
    }

    /**
     * * Get data patients by id
     * */
    public function show($id)
    {
        $patient = Patient::findOrFail($id);

        if (!empty($patient)) {
            return ApiFormatter::createApi(200, "Get Detail Resource", $patient);
        } else {
            return ApiFormatter::createApi(404, "Resource not found");
        }
    }

    /**
     * * Update data patient
     * */
    public function update(Request $request, $id)
    {
        $request->validate([
            "name" => "required",
            "phone" => "required|max:13",
            "address" => "required",
            "status" => "required",
            "in_date_at" => "required",
            "out_date_at" => "required",
        ]);

        $patinet = Patient::findOrFail($id);

        $input = [
            "name" => $request->name ?? $patinet->name,
            "phone" => $request->phone ?? $patinet->phone,
            "address" => $request->address ?? $patinet->address,
            "status" => $request->status ?? $patinet->status,
            "in_date_at" => $request->in_date_at ?? $patinet->in_date_at,
            "out_date_at" => $request->out_date_at,
        ];


        $patinet->update($input);

        return ApiFormatter::createApi(200, "Resource is updated successfully", $patinet);
    }


    /**
     * * Delete data patient
     * */
    public function destroy($id)
    {
        $patient = Patient::findOrFail($id);

        if (!empty($patient)) {
            $patient->delete();
            return ApiFormatter::createApi(200, "Resource is delete successfully", "Patient with id {$id} has been deleted");
        } else {
            return ApiFormatter::createApi(404, "Resource not found");
        }
    }

    /**
     * * Search data patient by name
     * */
    public function search($name)
    {
        $patient = Patient::where("name", $name)->get();
        if (!empty($patient)) {
            return ApiFormatter::createApi(200, "Get searched resource", $patient);
        } else {
            return ApiFormatter::createApi(404, "Resource not found");
        }
    }

    /**
     * * Search data patient by status
     * */
    public function searchByStatus($status)
    {
        $patient = Patient::where("status", $status)->get();
        if (!empty($patient)) {
            return ApiFormatter::createApi(200, "Get status resource", $patient);
        } else {
            return ApiFormatter::createApi(404, "Resource not found");
        }
    }
}
