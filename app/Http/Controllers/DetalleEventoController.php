<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\DetalleEvento;
use DB;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class DetalleEventoController extends Controller
{
    //	
		public function __construct()
		{
			// Apply the jwt.auth middleware to all methods in this controller
			$this->middleware('jwt.auth');
		}

		public function store(Request $request) {
			$detalle = new DetalleEvento;
			//TODO
			$detalle->idevento= $request->input('idevento');
			$detalle->idplaga = $request->input('idplaga');
			$detalle->quantity = $request->input('quantity');
			$detalle->createdby = $request->input('createdby');
			$detalle->modifiedby = $request->input('modifiedby');
			$detalle->save();
			return $detalle->id;
		}

		
}
