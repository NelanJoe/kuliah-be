<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        $response = [
            "message" => "Get all students",
            "data" => $students
        ];
        return response($response, 200);
    }

    public function store(Request $request)
    {
        $input = [
            "nama" => $request->nama,
            "nim" => $request->nim,
            "email" => $request->email,
            "jurusan" => $request->jurusan,
        ];

        $students = Student::create($input);

        $response = [
            "message" => "Students has succesfully add",
            "data" => $students
        ];

        return response($response, 201);
    }
}
