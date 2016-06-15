<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
use App\Plaga;


use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class PlagaController extends Controller
{
		public function __construct()
		{
		// Apply the jwt.auth middleware to all methods in this controller
		$this->middleware('jwt.auth');
		}

		public function showplagas(){
			$plagas=DB::table('plagas')
			->select('id','name')
			->get();
			return $plagas;
		}

}
