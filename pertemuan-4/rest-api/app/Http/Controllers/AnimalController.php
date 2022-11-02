<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        return "Menampilkan seluruh animal";
    }


    public function store(Request $request)
    {
        return response()->json([
            [
                'nama' => $request->nama
            ]
        ]);
        // return "Menambahkan data animal {$request->nama}";
    }

    public function update(Request $request, $id)
    {

        return "Mengubah data nama {$request->nama}" . $id;
    }

    public function destroy($id)
    {
        return "Menghapus data animal" . $id;
    }
}
