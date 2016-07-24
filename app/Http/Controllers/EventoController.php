<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Evento;
use DB;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class EventoController extends Controller
{
  public function __construct()
  {
      // Apply the jwt.auth middleware to all methods in this controller
      $this->middleware('jwt.auth');
  }

  public function index($idplanta)
  {
    $user = JWTAuth::parseToken()->authenticate();
    $role = $user->role;
    if($role != 'ADMIN'){

      return response()->json(['error' => 'Forbidden'], 403);
    }

      // Retrieve all  in the database and return them
      //$trampas = Configuraciontrampa::all();
      $eventos = DB::table('eventos')
          ->join('configuraciontrampas', 'configuraciontrampas.id', '=', 'eventos.idconfiguraciontrampa')
          ->join('clasificaciontrampas', 'clasificaciontrampas.id', '=', 'configuraciontrampas.idclasificaiontrampa')
          ->join('ubicaciones', 'ubicaciones.id', '=', 'configuraciontrampas.idubicacion')
          ->join('plantas', 'configuraciontrampas.idplanta', '=', 'plantas.id')
          ->select('eventos.id','configuraciontrampas.numerotrampa',
          'plantas.name as planta',
          'ubicaciones.name as ubicacionname',
          'clasificaciontrampas.name as clasificacionname',
          'eventos.fechaevento',
          'eventos.semana',
          'eventos.description')
          ->where('plantas.id',  $idplanta)
          ->orderBy('eventos.fechaevento','desc')
          ->get();

      return $eventos;
  }

  public function showDetail($id)
  {
      // Retrieve all  in the database and return them
      //$trampas = Configuraciontrampa::all();
      $detalle = DB::table('eventos')
          ->join('detalleeventos', 'detalleeventos.idevento', '=', 'eventos.id')
          ->join('plagas', 'detalleeventos.idplaga', '=', 'plagas.id')
          ->select('eventos.id','plagas.name', 'quantity')
          ->where('eventos.id', '=', $id)
          ->get();

      return $detalle;
  }

  public function showConfiguraciones($id)
  {
      $configuraciones=DB::table('configuraciontrampas')
      ->join('clasificaciontrampas', 'clasificaciontrampas.id', '=', 'configuraciontrampas.idclasificaiontrampa')
      ->join('ubicaciones', 'ubicaciones.id', '=', 'configuraciontrampas.idubicacion')
      ->select('configuraciontrampas.id','configuraciontrampas.numerotrampa',
          'ubicaciones.name as ubicacionname',
          'clasificaciontrampas.name as clasificacionname')
      ->where('configuraciontrampas.id','=',$id)
      ->get();
      return $configuraciones;
  }

  public function showconfiguracionesIDs($idplanta)
  {
      $configuraciones=DB::table('configuraciontrampas')
      ->select('configuraciontrampas.id','configuraciontrampas.numerotrampa')
      ->where('configuraciontrampas.idplanta','=',$idplanta)
      ->get();
      return $configuraciones;
  }


  /**
  * Store a nuew configuration trampa.
  * @param  Request  $request
  * @return Response
  */
  public function store(Request $request) {
  $evento = new Evento;
  //TODO
  $evento->idconfiguraciontrampa= $request->input('idconfigtrampa');
  $evento->createdby = $request->input('createdby');
  $evento->modifiedby = $request->input('modifiedby');
  $evento->fechaevento = $request->input('fecha');
  $evento->semana = $request->input('semana');
  $evento->description = $request->input('descripcion');

  $evento->save();
  return $evento->id;
  }



  /**
  * Delete the configuration trampa.
  * @param  id
  * @return Response
  */
  public function destroy($id) {

    $trampa =  Configuraciontrampa::find($id);
    $trampa->delete();
    return 'we\'re deleting trampa '.$id;
  }

}
