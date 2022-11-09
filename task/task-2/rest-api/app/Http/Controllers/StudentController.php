<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // Get all students
    public function index()
    {
        $students = Student::all();
        if (!empty($students)) {
            $response = [
                "code" => 200,
                "message" => "Success get all students",
                "data" => $students
            ];

            return response($response, 200);
        } else {
            $response = [
                "code" => 404,
                "message" => "Failed fetch data",
            ];
            return response($response, 404);
        }
    }

    public function show($id)
    {
        $students = Student::findOrFail($id);

        $response = [
            "code" => 200,
            "message" => "Students get student id",
            "data" => $students
        ];
        return response($response, 200);
    }

    // Save input API
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
            "code" => 201,
            "message" => "Students has succesfully add",
            "data" => $students
        ];

        return response($response, 201);
    }

    // Update student
    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);

        $student->nama = $request->nama;
        $student->nim = $request->nim;
        $student->email = $request->email;
        $student->jurusan = $request->jurusan;

        $student->save();

        $response = [
            "code" => 201,
            "message" => "Students has succesfully update",
            "data" => $student
        ];

        return response($response, 201);
    }

    // Delete student
    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->delete();

        $response = [
            "code" => 201,
            "message" => "Students has successfuly delete",
            "data" => $student
        ];
        return response($response, 201);
    }
}
