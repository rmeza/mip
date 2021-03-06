<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\DetalleEvento;
use DB;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\ConsumoEvento;

class DetalleEventoController extends Controller
{
    //
		public function __construct()
		{
			// Apply the jwt.auth middleware to all methods in this controller
			$this->middleware('jwt.auth');
		}

		public function store(Request $request) {

			$data =$request->all();

			foreach($data as $itemDet) {

				$detalle = new DetalleEvento;
				//echo $itemDet['quantity'];
				$detalle->idevento= $itemDet['idevento'];
				$detalle->idplaga = $itemDet['selectedPlaga'];
				$detalle->quantity = $itemDet['quantity'];
				$detalle->createdby = $itemDet['createdby'];
				$detalle->modifiedby = $itemDet['modifiedby'];
				$detalle->save();


			}

			return "OK";



			/*$detalle->idevento= $request->input('idevento');
			$detalle->idplaga = $request->input('idplaga');
			$detalle->quantity = $request->input('quantity');
			$detalle->createdby = $request->input('createdby');
			$detalle->modifiedby = $request->input('modifiedby');
			$detalle->save();

			return $detalle->id;
			*/

		}

///Store consume by current event.
		public function saveConsume(Request $request) {

			$consume = new ConsumoEvento;

			$consume->idevento= $request->input('idevento');
			$consume->consumeqty = $request->input('quantity');
			$consume->createdby = $request->input('createdby');
			$consume->modifiedby = $request->input('modifiedby');
			$consume->save();

			return $consume->id;


		}


}
