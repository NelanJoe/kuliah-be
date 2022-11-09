<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {

        $students = Student::all();
        if (!empty($students)) {
            $response = [
                "code" => 200,
                "message" => "Get all data students",
                "data" => $students
            ];

            return response($response, 200);
        } else {
            $response = [
                "code" => 404,
                "message" => "Data students not found",
            ];

            return response($response, 404);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            "nama" => "required|max:125",
            "nim" => "required|max:10",
            "email" => "required|email",
            "jurusan" => "required|max:125"
        ]);

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


    public function show($id)
    {
        $student = Student::findOrFail($id);
        if (!empty($student)) {
            $response = [
                "code" => 200,
                "message" => "Get student by id",
                "data" => $student
            ];
            return response($response, 200);
        } else {
            $response = [
                "code" => 404,
                "message" => "Student not found",
                "data" => null
            ];
            return response($response, 404);
        }
    }

    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);

        if (!empty($student)) {
            $request->validate([
                "nama" => "required|max:125",
                "nim" => "required|max:10",
                "email" => "required|email",
                "jurusan" => "required|max:125"
            ]);

            $input = [
                "nama" => $request->nama,
                "nim" => $request->nim,
                "email" => $request->email,
                "jurusan" => $request->jurusan,
            ];

            $student->update($input);

            $response = [
                "code" => 200,
                "message" => "Students has succesfully update",
                "data" => $student
            ];

            return response($response, 200);
        } else {
            $response = [
                "code" => 404,
                "message" => "Student not found",
            ];
            return response($response, 404);
        }
    }


    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        if (!empty($student)) {
            $student->delete();
            $response = [
                "code" => 200,
                "message" => "Students has succesfully delete",
            ];
            return response($response, 200);
        } else {
            $response = [
                "code" => 404,
                "message" => "Student not found",
            ];
            return response($response, 404);
        }
    }
}
