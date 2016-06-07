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

  public function index()
  {
      // Retrieve all  in the database and return them
      //$trampas = Configuraciontrampa::all();
      $eventos = DB::table('eventos')
          ->join('configuraciontrampas', 'configuraciontrampas.id', '=', 'eventos.idconfiguraciontrampa')
          ->join('clasificaciontrampas', 'clasificaciontrampas.id', '=', 'configuraciontrampas.idclasificaiontrampa')
          ->join('ubicaciones', 'ubicaciones.id', '=', 'configuraciontrampas.idubicacion')
          ->select('eventos.id','configuraciontrampas.numerotrampa',
          'ubicaciones.name as ubicacionname',
          'clasificaciontrampas.name as clasificacionname',
          'eventos.fechaevento',
          'eventos.semana', 
          'eventos.description')
          ->get();

      return $eventos;
  }
  
  public function ShowDetail($id)
  {
      // Retrieve all  in the database and return them
      //$trampas = Configuraciontrampa::all();
      $detalle = DB::table('eventos')
          ->join('detalleeventos', 'detalleeventos.idevento', '=', 'eventos.id')
          ->join('plagas', 'detalleeventos.idplaga', '=', 'plagas.id')
          ->select('eventos.id','plagas.name', 'quantity')
          ->where('detalleeventos.id', '=', $id)
          ->get();

      return $detalle;
  }
  
  /**
  * Store a nuew configuration trampa.
  * @param  Request  $request
  * @return Response
  */
  public function store(Request $request) {
  $trampa = new Configuraciontrampa;


  $trampa->numerotrampa = $request->input('numerotrampa');
  $trampa->description = $request->input('descripcion');
  $trampa->createdby = 'Yo';
  $trampa->modifiedby = 'yoo';
  $trampa->idplanta = $request->input('idplanta');
  $trampa->idubicacion = $request->input('ubicacion');
  $trampa->idtipotrampa = $request->input('tipotrampa');
  $trampa->idclasificaiontrampa = $request->input('clasificiontrampa');

  $trampa->save();
  return $trampa->numerotrampa;
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
