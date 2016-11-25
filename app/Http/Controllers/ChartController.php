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
    'plagas.name as plaga',
    'eventos.fechaevento')
    ->where('plantas.id',  $request->input('idPlanta'))
    ->where('configuraciontrampas.idclasificaiontrampa',  $request->input('clasificacionTrampa'))
    ->where('eventos.fechaevento','>=',   $request->input('dateStart'))
    ->where('eventos.fechaevento','<=',  $request->input('dateEnd'))
    ->groupBy('plagas.name','eventos.fechaevento')
    ->orderBy('eventos.fechaevento','asc')
    ->get();

    return $eventos;
  }

  /**
  * Retreive plagas filtering by trampa,date and clasificacion.
  * @param  Request  $request
  * @return Response
  */
  public function individuosGraph(Request $request)
  {

    $eventos = DB::table('eventos')
    ->join('detalleeventos', 'eventos.id', '=', 'detalleeventos.idevento')
    ->join('plagas', 'detalleeventos.idplaga', '=', 'plagas.id')
    ->join('configuraciontrampas', 'eventos.idconfiguraciontrampa', '=', 'configuraciontrampas.id')
    ->join('plantas', 'configuraciontrampas.idplanta', '=', 'plantas.id')
    ->select(DB::raw('SUM(detalleeventos.quantity) as quantity'),
    'plagas.name as plaga',
    'eventos.fechaevento')
    ->where('plantas.id',  $request->input('idPlanta'))
    ->where('configuraciontrampas.idclasificaiontrampa',  $request->input('clasificacionTrampa'))
    ->where('eventos.fechaevento','=',   $request->input('dateStart'))
    ->where('configuraciontrampas.id','=',  $request->input('idconfiguraciontrampa'))
    ->groupBy('plagas.name','eventos.fechaevento')
    ->get();

    return $eventos;
  }

  /**
  * Retreive consume filtering by date and clasificacion. ( for Exterio and Terciaria)
  * @param  Request  $request
  * @return Response
  */
  public function weeklyGraphConsume(Request $request)
  {

    $eventos = DB::table('eventos')
    ->join('consumoeventos', 'eventos.id', '=', 'consumoeventos.idevento')
    ->join('configuraciontrampas', 'eventos.idconfiguraciontrampa', '=', 'configuraciontrampas.id')
    ->join('plantas', 'configuraciontrampas.idplanta', '=', 'plantas.id')
    ->select(DB::raw('SUM(consumoeventos.consumeqty) as quantity'),
    'eventos.fechaevento')
    ->where('plantas.id',  $request->input('idPlanta'))
    ->where('configuraciontrampas.idclasificaiontrampa',  $request->input('clasificacionTrampa'))
    ->where('eventos.fechaevento','>=',   $request->input('dateStart'))
    ->where('eventos.fechaevento','<=',  $request->input('dateEnd'))
    ->groupBy('eventos.fechaevento')
    ->orderBy('eventos.fechaevento','asc')
    ->get();

    return $eventos;
  }

  /**
  * Retreive consumes  for Exterior an Terciaria filtering by trampa,date and clasificacion.
  * @param  Request  $request
  * @return Response
  */
  public function individuosGraphConsume(Request $request)
  {

    $eventos = DB::table('eventos')
    ->join('consumoeventos', 'eventos.id', '=', 'consumoeventos.idevento')
    ->join('configuraciontrampas', 'eventos.idconfiguraciontrampa', '=', 'configuraciontrampas.id')
    ->join('plantas', 'configuraciontrampas.idplanta', '=', 'plantas.id')
    ->select(DB::raw('SUM(consumoeventos.consumeqty) as quantity'),
    'eventos.fechaevento')
    ->where('plantas.id',  $request->input('idPlanta'))
    ->where('configuraciontrampas.idclasificaiontrampa',  $request->input('clasificacionTrampa'))
    ->where('eventos.fechaevento','=',   $request->input('dateStart'))
    ->where('configuraciontrampas.id','=',  $request->input('idconfiguraciontrampa'))
    ->groupBy('eventos.fechaevento')
    ->get();

    return $eventos;
  }

  /**
  * Get trampas filtering by clasificacion and ubicacion.
  * @param  Request  $request
  * @return Response
  */
  public function getTrampasByClasificacion(Request $request)
  {

    $trampas = DB::table('configuraciontrampas')
    ->join('plantas', 'configuraciontrampas.idplanta', '=', 'plantas.id')
    ->join('ubicaciones', 'configuraciontrampas.idubicacion', '=', 'ubicaciones.id')
    ->select(
    'configuraciontrampas.id',
    'plantas.name as planta',
    'configuraciontrampas.numerotrampa',
    'ubicaciones.name as ubicacion')
    ->where('plantas.id',  $request->input('idPlanta'))
    ->where('configuraciontrampas.idclasificaiontrampa',  $request->input('clasificacionTrampa'))
    ->orderBy('configuraciontrampas.numerotrampa','asc')
    ->get();

    return $trampas;
  }

}
