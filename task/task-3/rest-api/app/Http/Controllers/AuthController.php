<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $input = [
            "name" => $request->name,
            "password" => Hash::make($request->password),
            "email" => $request->email,
        ];

        $user = User::create($input);

        $response = [
            "code" => 200,
            "message" => "Register has successfully",
        ];

        return response($response, 200);
    }


    public function login(Request $request)
    {
        $input = [
            "email" => $request->email,
            "password" => $request->password,
        ];

        $user = User::where("email", $request->email)->first();

        if (Auth::attempt($input)) {
            $token = $user->createToken('auth_token');

            $response = [
                "code" => 200,
                "message" => "Login is succesfully",
                "token" => $token->plainTextToken
            ];

            return response($response, 200);
        } else {
            $response = [
                "code" => 404,
                "message" => "Login is invalid"
            ];

            return response($response, 404);
        }
    }
}
