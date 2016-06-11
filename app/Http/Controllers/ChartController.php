<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use DB;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class ChartController extends Controller
{
  public function __construct()
  {
      // Apply the jwt.auth middleware to all methods in this controller
      $this->middleware('jwt.auth');
  }

  public function weeklyGraph(Request $request)
  {
      // Retrieve all  in the database and return them
      //$trampas = Configuraciontrampa::all();
      $eventos = DB::table('eventos')
          ->join('detalleeventos', 'eventos.id', '=', 'detalleeventos.idevento')
          ->join('plagas', 'detalleeventos.idplaga', '=', 'plagas.id')
          ->join('configuraciontrampas', 'eventos.idconfiguraciontrampa', '=', 'configuraciontrampas.id')
          ->join('plantas', 'configuraciontrampas.idplanta', '=', 'plantas.id')
          ->select(DB::raw('SUM(detalleeventos.quantity) as quantity'),
          'plagas.name',
          'eventos.fechaevento')
          ->where('plantas.id',  $request->input('idPlanta'))
          ->where('configuraciontrampas.idclasificaiontrampa',  $request->input('clasificacionTrampa'))
          ->where('eventos.fechaevento','>=',   $request->input('dateStart'))
          ->where('eventos.fechaevento','<=',  $request->input('dateEnd'))
          ->groupBy('plagas.name','eventos.fechaevento')
          ->get();

      return $eventos;
  }



}
